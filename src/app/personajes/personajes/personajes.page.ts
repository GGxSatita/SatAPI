import { Component, OnInit } from '@angular/core';
import {PersonajeService} from '../../services/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes = []

  constructor( private personajeService :  PersonajeService) { }

  ngOnInit() {
    this.personajeService.cargaPersonajes()
    .subscribe(data => {
      this.personajes = data
    })
  }

  agregarPersonaje(){

  }

}
