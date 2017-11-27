import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ModalSampleComponent } from './components/modal-sample/modal-sample.component';
import { ModalService, ModalEntryDirective } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @ViewChild(ModalEntryDirective) modalEntry: ModalEntryDirective;

  result = "";

  constructor(private modal: ModalService) { }

  openModal() {
    // The component must registered 'entryComponents' in module.
    // And also, that module can not lazy load.
    this.modal.open<string>(this.modalEntry, ModalSampleComponent, 'initial')
      .subscribe(
        result => {
          this.result = result;
        },
      _ => {
        console.log('canceled');
      })
  }
}
