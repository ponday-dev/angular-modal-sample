import { Component } from '@angular/core';
import { ModalSampleComponent } from './components/modal-sample/modal-sample.component';
import { Modal } from './modules/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = "";

  constructor(private modal: Modal) { }

  openModal() {
    // The component must registered 'entryComponents' in module.
    // And also, that module can not lazy load.
    this.modal.open<string>(ModalSampleComponent, 'initial')
      .subscribe(
        result => {
          this.result = result;
        },
      _ => {
        console.log('canceled');
      })
  }
}
