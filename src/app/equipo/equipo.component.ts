import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerEquipoService } from '../ser-equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  
  equipo:any[] = [];
  
  constructor(
    private  ruta:ActivatedRoute,
    private _servicio:SerEquipoService
    ){
  this.ruta.params.subscribe(params =>{
    console.log(params['id'])
    this.equipo = this._servicio.obtenerUno(params['id'])
  });
  }
  ngOnInit(): void {
}
}
