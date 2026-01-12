import { Routes } from '@angular/router';
import { PlayerCard } from './components/card/card.components';
import { PlayersList } from './components/list/list.components';
import { Home } from './components/home/home.components';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'list',
    component: PlayersList,
  },
  {
    path: 'card',
    component: PlayerCard,
  },

];
