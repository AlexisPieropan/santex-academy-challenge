import { Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { PlayerDetail } from './components/player-detail/player-detail';
import { Login } from './components/login/login';
import { PlayerCreate } from './components/player-create/player-create';
import { PlayerEdit } from './components/player-edit/player-edit';
import { Register } from './components/register/register';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: PlayerComponent,
  },
  {
    path: 'player/create',
    component: PlayerCreate,
  },
  {
    path: 'player/edit/:id',
    component: PlayerEdit,
  },
  {
  path: 'register',
  component: Register,
},
  {
    path: 'player/:id',
    component: PlayerDetail,
  },
];