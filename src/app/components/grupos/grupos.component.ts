import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})

export class GruposComponent implements OnInit {

  public grupos: Grupo[] = []
  @Output() grupoClicado = new EventEmitter();

  private grupoTotal: Grupo = new Grupo(0, "Todos");

  constructor(private http: HttpService) {

    this.http.getGrupos().subscribe(
      (data) => {

        this.grupos = [this.grupoTotal, ...data];
      });

  }

  ngOnInit(): void {

  }

}
