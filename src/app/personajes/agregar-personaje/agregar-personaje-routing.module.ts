import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPersonajePage } from './agregar-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPersonajePageRoutingModule {}
