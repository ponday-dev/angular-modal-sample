import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ReflectiveInjector } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export class ModalContext {

  constructor(
    private _resolve: Function,
    private _reject: Function,
    public params: any
  ) { }

  resolve(val: any) {
    this._resolve(val);
  }
  reject(reason?: any) {
    this._reject(reason);
  }
}

@Injectable()
export class Modal {
  // The reference of mount point.
  public ref: ViewContainerRef;
  // The flag of show mounted dialog.
  // True if the variable 'count' more than 1, False when the other cases.
  private _isOpen = new BehaviorSubject<boolean>(false);
  // The count of opened modals.
  private count = 0;

  constructor(private resolver: ComponentFactoryResolver) { }

  isOpen(): Observable<boolean> {
    return this._isOpen.asObservable();
  }

  open<T>(component: any, params?: any): Observable<T> {
    let componentRef: ComponentRef<any>;

    const promise = new Promise<T>((resolve, reject) => {

      // Create component factory. (type of ComponentFactory<{}>)
      const factory = this.resolver.resolveComponentFactory(component);

      // Close dialog.
      // Success
      const _resolve = (val: T) => {
        if (componentRef) {
          componentRef.destroy();
          resolve(val);
          this.decrementCount();
        }
      };

      // Failure
      const _reject = (reason?: any) => {
        if (componentRef) {
          componentRef.destroy();
          reject(reason);
          this.decrementCount();
        }
      };

      // Create an array of ResolvedReflectProvider for provide ModalContext
      const bindings = ReflectiveInjector.resolve([
        { provide: ModalContext, useValue: new ModalContext(_resolve, _reject, params) }
      ]);
      // Create injector with ModalContext bindings and the injector of ViewContainerRef.
      const injector = ReflectiveInjector.fromResolvedProviders(bindings, this.ref.parentInjector);

      // Create a modal component instance and append to child of ModalInner.
      componentRef = this.ref.createComponent(factory, this.ref.length, injector);
      this.ref.element.nativeElement.appendChild(componentRef.location.nativeElement);
      // Increase count of opened dialogs.
      this.incrementCount();
    });

    return Observable.fromPromise(promise);
  }

  private incrementCount() {
    this.setCount(1);
  }
  private decrementCount() {
    this.setCount(-1);
  }
  private setCount(diff: number) {
    this.count = this.count + diff > 0 ? this.count + diff : 0;
    this._isOpen.next(this.count > 0);
  }
}
