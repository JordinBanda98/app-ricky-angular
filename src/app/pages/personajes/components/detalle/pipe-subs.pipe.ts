import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSubs'
})
export class PipeSubsPipe implements PipeTransform {

  transform(value:string) {

    const separador:string[] = value.split('/')
    
    const nuevocodigo:string = separador[5]

    return nuevocodigo;
  }

}
