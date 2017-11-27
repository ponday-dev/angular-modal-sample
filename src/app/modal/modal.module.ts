import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalService } from './modal.service';
import { ModalEntryDirective } from './modal-entry.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalEntryDirective
  ],
  providers: [
    ModalService
  ],
  declarations: [
    ModalContainerComponent,
    ModalEntryDirective
  ],
  entryComponents: [
    ModalContainerComponent
  ]
})
export class ModalModule { }
