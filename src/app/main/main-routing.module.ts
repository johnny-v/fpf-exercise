import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'files', pathMatch: 'full' },
      {
        path: 'users',
        canActivate: [],
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'files',
        canActivate: [],
        loadChildren: () => import('./files/files.module').then((m) => m.FilesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
