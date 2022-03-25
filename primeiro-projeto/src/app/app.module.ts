import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
