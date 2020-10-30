import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosPage } from './cursos.page';
import { PrimeroDamPageModule } from '../primero-dam/primero-dam.module';
import { SegundoDamPageModule } from '../segundo-dam/segundo-dam.module';


const routes: Routes = [
  {
    path: '',
    component: CursosPage,
    children: [
      {
        path: 'primero-dam',
        loadChildren: () => import('../primero-dam/primero-dam.module').then(m => m.PrimeroDamPageModule)
      },
      {
        path: 'segundo-dam',
        loadChildren: () => import('../segundo-dam/segundo-dam.module').then(m => m.SegundoDamPageModule)
      },
      {
        path: 'fct',
        loadChildren: () => import('../fct/fct.module').then(m => m.FctPageModule)
      },
      {
        path: '',
        redirectTo: 'primero-dam',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosPageRoutingModule {}
