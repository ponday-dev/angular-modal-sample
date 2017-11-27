import { Directive, ChangeDetectorRef, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modalEntry]'
})
export class ModalEntryDirective {

  constructor(
    public cd: ChangeDetectorRef,
    public renderer: Renderer2,
    public vcr: ViewContainerRef
  ) { }

}
