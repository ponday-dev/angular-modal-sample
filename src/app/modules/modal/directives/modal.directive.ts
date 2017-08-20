import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modal-inner]'
})
export class ModalInner {

  constructor(public ref: ViewContainerRef) { }

}
