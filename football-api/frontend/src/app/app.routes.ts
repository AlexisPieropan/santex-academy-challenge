import { Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { PlayerDetail } from './components/player-detail/player-detail';

export const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
  },
  {
    path: 'player/:id',
    component: PlayerDetail,
  },
];