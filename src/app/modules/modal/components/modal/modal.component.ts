import {
  Component,
  OnInit, AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Modal } from '../../services/modal.service';
import { ModalInner } from '../../directives/modal.directive';

@Component({
  selector: 'modal-entry',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalEntry implements OnInit, AfterViewInit {

  // Reference of element that attached ModalInner directive.
  @ViewChild(ModalInner) private inner: ModalInner;
  // The flag for hide background shade layer of dialogs at first view.
  attached = false;
  // The flag of show mounted dialog.
  isOpen: Observable<boolean>;

  constructor(
    private cd: ChangeDetectorRef,
    public modal: Modal
  ) {
    // Toggle the 'attached' flag to false when the 'isOpen' toggle to true first time.
    this.modal.isOpen()
      .filter(isOpen => isOpen)
      .take(1)
      .subscribe( _ => {
        this.attached = true;
        cd.markForCheck();
      });
  }

  ngOnInit() {
    // Subscribe isOpen observable by async pipe.
    this.isOpen = this.modal.isOpen();
  }

  ngAfterViewInit() {
    // Set the variable of ViewContainerRef in ModalInner to The 'ref' variable in Modal service.
    // The Modal service will mount dynamic component to this ViewContainerRef.
    this.modal.ref = this.inner.ref;
  }

}
