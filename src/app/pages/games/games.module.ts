import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesPage } from './games.page';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [GamesPage],
  imports: [CommonModule, GamesRoutingModule, SharedModule],
})
export class GamesModule {}
