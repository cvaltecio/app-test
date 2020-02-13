import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController, ToastController } from '@ionic/angular';


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
  ];

  address = null as any;
  cep: string = null;
  loading: any;

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    private api: ApiService
  ) { }

  async presentLoading(message: string, duration: number) {
    this.loading = await this.loadingController.create({ message, duration });
    await this.loading.present();
  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({ message, duration });
    toast.present();
  }

  async getAddress() {

    if (!this.cep)
      return this.presentToast('Por favor, digite o CEP!', 2500);

    await this.presentLoading('Buscando cep...', 20000);

    this.api.getAdrress(this.cep)
      .then((data) => {
        this.loading.dismiss();
        this.address = data;
        this.cep = null;
      }).catch((err) => {
        this.presentToast('Erro ao buscar Endereço, por favor, tente novamente!', 3500);
      });
  }

}
