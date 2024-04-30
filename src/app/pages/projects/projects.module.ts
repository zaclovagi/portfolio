import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPage } from './projects.page';
import { SharedModule } from '../../shared';
import { ProjectCardComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProjectsPage, ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class ProjectsModule {}
