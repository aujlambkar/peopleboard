import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
