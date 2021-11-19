import { Pessoa } from './../entidade/Pessoa';
import { ServicoService } from './../../../Service/servico.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  listaPessoa: Pessoa[] = [];
  constructor(private service: ServicoService) { }
  
  ngOnInit(){
    this.service.getPessoa()
    .subscribe(data =>{
      this.listaPessoa = data;
    })
  }
}
