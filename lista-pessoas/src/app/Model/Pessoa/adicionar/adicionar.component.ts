import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicoService } from './../../../Service/servico.service';
import { Pessoa } from './../entidade/Pessoa';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  constructor(private service: ServicoService, private router: Router) { }

  ngOnInit(): void {
  }

  addPessoa(){
    this.service.addPessoa(this.pessoa)
    .subscribe(data => {
      alert('Cadastrado com sucesso');
      this.router.navigate(["listar"]);
    })
  }
}
