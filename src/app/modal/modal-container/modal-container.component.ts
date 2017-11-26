import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  hidden = true;

  ngAfterViewInit() {
    setTimeout(() => this.hidden = false, 30);
  }

}
