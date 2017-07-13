import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { ROUTES } from './app.routing';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    FormsModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
