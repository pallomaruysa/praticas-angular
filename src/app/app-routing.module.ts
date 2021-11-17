import { AdicionarComponent } from './Model/Pessoa/adicionar/adicionar.component';
import { ListarComponent } from './Model/Pessoa/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'adicionar', component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
