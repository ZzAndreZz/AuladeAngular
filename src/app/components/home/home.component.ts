import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('lista') lista:ListaDeProdutosComponent;

  constructor() { }

  listarGrupo(grupo: Grupo) {
    console.log(grupo);
    this.lista.listarDoGrupo(grupo.cod);
  }

  ngOnInit(): void {
  }

}
