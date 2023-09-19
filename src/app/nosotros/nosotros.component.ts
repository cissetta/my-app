import { Component, OnInit } from '@angular/core';
import { SerEquipoService } from '../ser-equipo.service';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  
  equipo:any[]=[];

  constructor(private _servicio: SerEquipoService ){
    this.equipo = _servicio.obtenerEquipo();
  }
    
  ngOnInit() {
  }

}