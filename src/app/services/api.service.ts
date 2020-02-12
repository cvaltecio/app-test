import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL: 'https://viacep.com.br/ws'

  constructor() { }

  getCep() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.BASE_URL}/01001000/json/`)
        .then((resp) => resolve(resp.data))
        .catch((err) => reject(err));
    });
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
