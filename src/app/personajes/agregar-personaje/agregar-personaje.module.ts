import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPersonajePageRoutingModule } from './agregar-personaje-routing.module';

import { AgregarPersonajePage } from './agregar-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPersonajePageRoutingModule
  ],
  declarations: [AgregarPersonajePage]
})
export class AgregarPersonajePageModule {}
