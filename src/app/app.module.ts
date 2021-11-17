import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Model/Pessoa/listar/listar.component';
import { EditarComponent } from './Model/Pessoa/editar/editar.component';
import { AdicionarComponent } from './Model/Pessoa/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
