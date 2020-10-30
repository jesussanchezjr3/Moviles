import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './pages/inicio/Inicio.module';


const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/Inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./pages/datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'primero-dam',
    loadChildren: () => import('./pages/primero-dam/primero-dam.module').then( m => m.PrimeroDamPageModule)
  },
  {
    path: 'segundo-dam',
    loadChildren: () => import('./pages/segundo-dam/segundo-dam.module').then( m => m.SegundoDamPageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('./pages/fct/fct.module').then( m => m.FctPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
