import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesPage } from './games.page';
import { SharedModule } from '../../shared';
import { GameCardComponent } from './components';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [GamesPage, GameCardComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class GamesModule {}
