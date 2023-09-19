import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SerEquipoService {

  equipo:any[]= [
    {
      nombre:'Juan',
      especialidad:'HTML',
      descripcion:' Description'
    },
    {
      nombre:'Pedro',
      especialidad:'Javascript',
      descripcion:' Description'
    }

  ]
  constructor() {
    console.log('Funcionando el servidor')
   }
  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i:number){
    return this.equipo[i];
  }

}
