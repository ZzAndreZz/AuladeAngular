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

  constructor(private http: HttpService) {
    this.http.getProdutos().subscribe(
      (data) => { this.produtos = data}
    )
  }

  ngOnInit(): void {
  }

}
