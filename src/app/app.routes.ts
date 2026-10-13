import { Routes } from '@angular/router';
<<<<<<< HEAD
import { Home } from './pages/home/home';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'eventos/novo', component: CadastroEvento },
  { path: '**', component: NaoEncontrado },
];
=======
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
>>>>>>> df1203bb5b2c10b0d44ce3011c2cfe0ace1936df
