import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';
import { Home } from './home/home';


export const routes: Routes = [
  { path: '', redirectTo: 'home',
    pathMatch: 'full' },

  { path: 'home',   component: Home    },
  { path: 'pessoa', component: Pessoa  },

  // // precisa ser sempre a ÚLTIMA
  // { path: '**', component: NaoEncontrada }
];