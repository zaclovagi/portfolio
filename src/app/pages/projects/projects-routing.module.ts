import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPage } from './projects.page';
import { WarrantyspherePage } from './subpages';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage,
  },
  // TODO:
  // {
  //   path: 'warrantysphere',
  //   component: WarrantyspherePage,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
