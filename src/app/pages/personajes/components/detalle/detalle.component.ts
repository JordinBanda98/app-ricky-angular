import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../providers/personajes.service';
import { Result } from '../../models/character.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  id: string;
  peronsaje: Result
  loading = true;
  constructor(private activatedRoue: ActivatedRoute,
              private personajeService: PersonajesService) {
    this.activatedRoue.params.subscribe(params => {
      this.id = params['id'].toString();
      this.cargarPersonaje(this.id);
    });
   }

  ngOnInit(): void {
  }

  cargarPersonaje(id: string) {
    this.loading = true;
    this.personajeService.getPersonaje(id)
    .subscribe(result => {
      
      const separador:string[] = result.location.url.split('/')

    const nuevocodigo:string = separador[5]
      this.peronsaje = result;
      this.peronsaje.location.url = nuevocodigo
      this.loading = false;
      console.log(result)
    });
  }

}
