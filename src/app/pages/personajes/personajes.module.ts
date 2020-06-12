import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes.component';
import { ListaComponent } from './components/lista/lista.component';
import { PersonajesRoutingModule } from './personajes.routing';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PipeSubsPipe } from './components/detalle/pipe-subs.pipe';



@NgModule({
  declarations: [PersonajesComponent, ListaComponent, DetalleComponent, PipeSubsPipe],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    HttpClientModule
  ]
})
export class PersonajesModule { }
