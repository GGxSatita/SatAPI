import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import {PersonajeService} from '../../services/personaje.service';
@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.page.html',
  styleUrls: ['./agregar-personaje.page.scss'],
})
export class AgregarPersonajePage implements OnInit {

  constructor( private personajeService: PersonajeService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  agregarNuevoPersonaje(nombre, imagen, planeta, edad){
    const PERSONAJE : Personaje = {
      imagen : imagen.value,
      nombre : nombre.value,
      planeta : planeta.value,
      edad : edad.value


    }
    this.personajeService.agregarPersonaje(PERSONAJE).subscribe(data => {
      this.router.navigate(['/personajes'])
    })

  }
}
