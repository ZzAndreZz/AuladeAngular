import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Produto } from 'src/app/models/Produto';


@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public produtos: Produto[] = [];
  public produtosExibidos: Produto[] = [];

  constructor(private http: HttpService) {

    this.http.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
        this.produtosExibidos = data;
      }
    )
  }

  listarDoGrupo(codDoGrupo: number) {
    if (codDoGrupo != 0) {
      this.produtosExibidos = this.produtos.filter(
        produto => produto.cod_grupo == codDoGrupo
      )
    } else {
      this.produtosExibidos = this.produtos;
    }
  }

  ngOnInit(): void {
  }

}
