import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-entry',
  templateUrl: './modal-entry.component.html',
  styleUrls: ['./modal-entry.component.scss']
})
export class ModalEntryComponent implements AfterViewInit {

  @ViewChild('inner', { read: ViewContainerRef })
  inner: ViewContainerRef;

  constructor(private modal: ModalService) { }

  ngAfterViewInit() {
    this.modal.ref = this.inner;
  }

}
