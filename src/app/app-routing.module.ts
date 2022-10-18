import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./personajes/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'agregar-personaje',
    loadChildren: () => import('./personajes/agregar-personaje/agregar-personaje.module').then( m => m.AgregarPersonajePageModule)
  },

  {
    path : 'personajes',
    children : [
      {
        path : "",
        loadChildren: () => import ('./personajes/personajes/personajes.module').then( m => m.PersonajesPageModule)
      },
      {
        path : ':personajeId',
        loadChildren: () => import ('./personajes/detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
