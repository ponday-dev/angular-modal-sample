import {
  Injectable,
  Injector,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentRef ,
  Type,
  StaticProvider,
  Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { ModalContext } from './modal-context';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalEntryDirective } from './modal-entry.directive';

@Injectable()
export class ModalService {

  private count = 0;

  constructor(private resolver: ComponentFactoryResolver) { }

  open<T>(modalEntry: ModalEntryDirective, component: any, params?: any): Observable<T> {
    const promise = new Promise<T>((resolve, reject)=> {
      const container = this.createComponentRef(ModalContainerComponent, modalEntry.vcr);

      const resolveFn = (val: T) => {
        container.destroy();
        resolve(val);
        this.count--;
      };

      const rejectFn = (reason?: any) => {
        container.destroy();
        reject(reason);
        this.count--;
      };

      const staticProvider = [
        { provide: ModalContext, useValue: new ModalContext(resolveFn, rejectFn, params) }
      ];
      const componentRef = this.createComponentRef(component, modalEntry.vcr,staticProvider);

      this.appendChild(modalEntry.renderer, (<ModalContainerComponent> container.instance).container, componentRef);
      this.appendChild(modalEntry.renderer, modalEntry.vcr, container);

      modalEntry.cd.markForCheck();
    });
    return fromPromise(promise);
  }
 
  private appendChild(renderer: Renderer2, vcr: ViewContainerRef, componentRef: ComponentRef<any>) {
    renderer.appendChild(vcr.element.nativeElement, componentRef.location.nativeElement);
  }

  private createComponentRef<T>(type: Type<T>, ref: ViewContainerRef, providers: StaticProvider[] = []): ComponentRef<T> {
    const factory = this.resolver.resolveComponentFactory(type);
    const injector = Injector.create(providers, ref.parentInjector);
    return ref.createComponent(factory, this.count++, injector);
  }

}
