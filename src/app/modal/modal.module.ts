import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEntryComponent } from './modal-entry/modal-entry.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalEntryComponent
  ],
  providers: [
    ModalService
  ],
  declarations: [
    ModalEntryComponent, 
    ModalContainerComponent
  ],
  entryComponents: [
    ModalContainerComponent
  ]
})
export class ModalModule { }
