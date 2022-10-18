import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {

  personaje : Personaje

  constructor(private personajeService : PersonajeService,
      private router : Router,
      private activatedRoute : ActivatedRoute
      ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('personajeId');
      this.personajeService.cargarPersonaje(id).subscribe(data => {
        this.personaje = data
      })
    })
  }

  eliminarPersonaje() {

  }

}
