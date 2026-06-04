import { Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { PlayerDetail } from './components/player-detail/player-detail';
import { Login } from './components/login/login';

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
    path: 'player/:id',
    component: PlayerDetail,
  },
];