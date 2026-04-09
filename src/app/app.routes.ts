import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portafolio', component: Portfolio },
  { path: 'servicios', component: Services },
  { path: 'contacto', component: Contact },
];