import {
  Injectable,
  Injector,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentRef ,
  Type,
  StaticProvider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { ModalContext } from './modal-context';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@Injectable()
export class ModalService {

  private refs: ViewContainerRef[] = [];

  constructor(private resolver: ComponentFactoryResolver) { }

  open<T>(component: any, params?: any): Observable<T> {
    const promise = new Promise<T>((resolve, reject)=> {
      const container = this.createComponentRef(ModalContainerComponent);

      const resolveFn = (val: T) => {
        container.destroy();
        resolve(val);
        this.refs.pop();
      };

      const rejectFn = (reason?: any) => {
        container.destroy();
        reject(reason);
        this.refs.pop();
      };

      const staticProvider = [
        { provide: ModalContext, useValue: new ModalContext(resolveFn, rejectFn, params) }
      ];
      const componentRef = this.createComponentRef(component, staticProvider);

      this.appendChild((<ModalContainerComponent> container.instance).container, componentRef);
      this.appendChild(this.ref, container);
    });
    return fromPromise(promise);
  }
 
  private appendChild(vcr: ViewContainerRef, componentRef: ComponentRef<any>) {
    (<HTMLElement> vcr.element.nativeElement).appendChild(componentRef.location.nativeElement);
  }

  private createComponentRef<T>(type: Type<T>, providers: StaticProvider[] = []): ComponentRef<T> {
    const factory = this.resolver.resolveComponentFactory(type);
    const injector = Injector.create(providers, this.ref.parentInjector);
    return this.ref.createComponent(factory, this.refs.length, injector);
  }

  get ref(): ViewContainerRef {
    return this.refs[this.refs.length - 1];
  }
  set ref(ref: ViewContainerRef) {
    this.refs.push(ref);
  }
}
