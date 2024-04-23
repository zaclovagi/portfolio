import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBarComponent } from './components';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  // {
  //   path: 'projects',
  //   loadChildren: () =>
  //     import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  // },
  // {
  //   path: 'games',
  //   loadChildren: () =>
  //     import('./pages/games/games.module').then((m) => m.GamesModule),
  // },
  {
    path: 'contact',
    component: ContactPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
