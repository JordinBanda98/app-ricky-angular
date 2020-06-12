import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character, Result } from '../models/character.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getPersonajes(page: string = '1') {
    const url = `${environment.urlbase}${environment.endpoints.characters}/?page=${page}`;
    return this.http.get<Character>(url).pipe(catchError(val => {
      const error:Character ={
      info:{
      count:0,
      next:'error',
      pages:0,
      prev:null
      },
      results:null
      };
      return of(error)
    }));
  }

  getPersonaje(id: string) {
    const url = `${environment.urlbase}${environment.endpoints.characters}/${id}`;
    return this.http.get<Result>(url)
    
  }

  
}
