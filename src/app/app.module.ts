import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalSampleComponent } from './components/modal-sample/modal-sample.component';
import { ModalModule } from './modules/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [],
  entryComponents: [
    ModalSampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
