import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/intrefaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-addeditproducto',
  templateUrl: './addeditproducto.component.html',
  styleUrls: ['./addeditproducto.component.css']
})

export class  AddeditproductoComponent implements OnInit {
  formProducto: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string= "Agregar ";

  constructor (private fb: FormBuilder,
    private _productoService: ProductoService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.formProducto = this.fb.group({
      // Se pueden hacer validaciones
      nombre: ['', Validators.required],
      precio: [null, Validators.required],
      stock: [null, Validators.required],
  })
  //Recoge id cuando editamos o agregamos null
  this.id= Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0){
      this.operacion = 'Editar ';
      this.getProducto(this.id);
    }
  }

  getProducto(id: number)  {
    this.loading = true;
    this._productoService.getProducto(id).subscribe((data:Producto)=> {
      console.log(data);
      this.loading=false;
      this.formProducto.patchValue({
        nombre: data.nombre, 
        precio: data.precio, 
        stock: data.stock 
      })
    })
  }

  addProducto(): void {
  //console.log('addProducto')
  const producto : Producto = {
    nombre: this.formProducto.value.nombre,
    precio: this.formProducto.value.precio,
    stock: this.formProducto.value.stock
  }
  this.loading=true;
  this._productoService.saveProducto(producto).subscribe(() => {
    this.loading=false;
    console.log('Producto Agregado');
    this.router.navigate(['/login']);
  })
  }
}
