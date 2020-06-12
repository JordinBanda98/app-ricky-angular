import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../providers/lugares.service';
import { Results } from '../../models/lugares.model';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/pages/personajes/models/character.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  id: number;
  lugar: Results
  loading = true;
  lugares: Results[] = [];
  peronsaje: Result;
  constructor(private lugaresServices: LugaresService,
    private activatedRoue: ActivatedRoute,
    ) {
 
      this.activatedRoue.params.subscribe(params => {
        this.id = + params['id']
      });
 

     }

  ngOnInit(): void {

    if(this.id ){
      this.cargarLugares();
    }else{
     this.cargarLugaresTodos();
    }
    //this.cargarLugar(this.id)
    
  }

  cargarLugares() {
    this.lugaresServices.getLugares()
    .subscribe(lugares => {
      const id= this.id
      const array:Results[] = lugares.results
      this.lugares = array.filter(number => number.id === id );

      console.log(this.lugares)

    })
  }
  cargarLugaresTodos() {
    this.lugaresServices.getLugares()
    .subscribe(lugares => {
      const id= this.id
      const array:Results[] = lugares.results
      this.lugares = array

      console.log(this.lugares)

    })
  }


  cargarLugar(id: string) {
    this.loading = true;
    this.lugaresServices.getLugar(id)
    .subscribe(result => {
      this.lugar = result;
      this.loading = false;
      console.log(result)
    });
  }

}
