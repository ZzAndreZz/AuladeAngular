import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listarGrupo(grupo: Grupo) {
    console.log(grupo);
  }

  ngOnInit(): void {
  }

}
