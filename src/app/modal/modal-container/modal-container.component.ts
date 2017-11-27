import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  hidden = true;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.hidden = false;
      this.cd.markForCheck();
    }, 30);
  }

}
