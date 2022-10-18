import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'agregar-personaje',
    loadChildren: () => import('./personajes/agregar-personaje/agregar-personaje.module').then( m => m.AgregarPersonajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
