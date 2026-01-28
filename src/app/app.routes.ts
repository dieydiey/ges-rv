import { Routes } from '@angular/router';
import { ListeDrvComponent } from './features/demande/liste-drv/liste-drv.component';
import { ListeRvComponent } from './features/liste-rv/liste-rv.component';
import { FaireDemandeComponent } from './features/demande/faire-demande/faire-demande.component';



export const routes: Routes = [
  { path: 'demandes', component: ListeDrvComponent },
  { path: 'rendez-vous', component: ListeRvComponent },
  { path: 'faire-demande', component: FaireDemandeComponent },
  { path: '', redirectTo: 'demandes', pathMatch: 'full' }
];
