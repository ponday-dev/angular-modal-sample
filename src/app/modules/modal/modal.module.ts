import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInner } from './directives/modal.directive';
import { ModalEntry } from './components/modal/modal.component';
import { Modal, ModalContext } from './services/modal.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ ModalEntry ],
  providers: [ Modal ],
  declarations: [
    ModalEntry,
    ModalInner
  ]
})
export class ModalModule { }
