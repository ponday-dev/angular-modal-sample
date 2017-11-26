import { Component } from '@angular/core';
import { ModalContext } from '../../modal';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.scss']
})
export class ModalSampleComponent {

  message: string;

  constructor(private modalContext: ModalContext) {
    if (this.modalContext.params) {
      this.message = this.modalContext.params;
    }
  }

  onClickOk() {
    this.modalContext.resolve(this.message);
  }

  onClickCancel() {
    this.modalContext.reject();
  }

}
