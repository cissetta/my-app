import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


// Servicios
import { SerEquipoService } from './ser-equipo.service';


//Modulos
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { CrudprodutosComponent } from './crudprodutos/crudprodutos.component';
import { AddeditproductoComponent } from './components/addeditproducto/addeditproducto.component';
import { ListproductoComponent } from './components/listproducto/listproducto.component';


const routers : Routes =[
  { path:'', component: InicioComponent},
  { path:'contacto', component: ContactoComponent},
  { path:'equipo/:id', component: EquipoComponent},
  { path:'productos', component: ProductosComponent},
  { path:'nosotros', component: NosotrosComponent},
  { path:'login', component: ListproductoComponent},
  { path:'add', component: AddeditproductoComponent},
  { path:'add/:id', component: AddeditproductoComponent}, 
  { path:'**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    NavegacionComponent,
    ContactoComponent,
    NosotrosComponent, 
    ProductosComponent,
    InicioComponent,
    EquipoComponent,
    CrudprodutosComponent,
    AddeditproductoComponent,
    ListproductoComponent
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [
    SerEquipoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
