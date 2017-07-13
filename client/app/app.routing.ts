import { Routes, RouterModule } from '@angular/router';
import { PersonCardComponent } from './person-card/person-card.component';

export const ROUTES = RouterModule.forRoot([
  {path: '', component: PersonCardComponent}
]);
