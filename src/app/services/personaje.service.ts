import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  url = 'http://localhost:3000/personajes/';

  constructor( private http: HttpClient) { }

  cargaPersonajes(): Observable <any> {
    return this.http.get<any>(this.url)
  }
}
