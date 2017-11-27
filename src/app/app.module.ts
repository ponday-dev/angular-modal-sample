import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';
import { ModalSampleComponent } from './components/modal-sample/modal-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalSampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalSampleComponent,
  ]
})
export class AppModule { }
