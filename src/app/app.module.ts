import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EllipsisContainerComponent } from './ellipsis-container/ellipsis-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
