import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista = [
    { nome: 'nike', preco: 150 },
    { nome: 'adidas', preco: 99 },
    { nome: 'lacoste', preco: 15 },
    { nome: 'teste 1', preco: 1000 },
    { nome: 'arroz', preco: 1 },
  ]

  constructor(
    private api: ApiService
  ) { }

  async onClick() {

  }

}
