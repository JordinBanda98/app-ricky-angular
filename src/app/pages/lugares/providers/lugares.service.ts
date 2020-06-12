import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Locations,Results } from '../models/lugares.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private http: HttpClient) { }

  getLugares(page: string = '1') { //,
    const url = `${environment.urlbase}${environment.endpoints.locations}/?page=${page}`;
    return this.http.get<Locations>(url);
  }

  getLugar(id: string) {
    const url = `${environment.urlbase}${environment.endpoints.locations}/${id}`;
    console.log(url)
    return this.http.get<Results>(url);
  }
}
