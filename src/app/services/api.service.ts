import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL: string = 'https://viacep.com.br/ws';

  constructor() { }

  public async getAdrress(cep: string) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.BASE_URL}/${cep}/json/`)
        .then((resp) => resolve(resp.data))
        .catch((err) => reject({ msg: 'Erro ao obter CEP, por favor, tente novamente', err }))
    })
  }

  get produtos() {
    return new Promise((resolve, reject) => {
      axios.get(this.BASE_URL + '/produtos')
        .then((resp) => resolve(resp.data))
        .catch((err) => reject(err));
    });
  }

  get categorias() {
    return new Promise((resolve, reject) => {
      axios.get(this.BASE_URL + '/produtos')
        .then((resp) => resolve(resp.data))
        .catch((err) => reject(err));
    });
  }




}
