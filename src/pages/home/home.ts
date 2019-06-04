import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { CategoriaServerProvider } from '../../providers/categoria-server/categoria-server';
import { Categoria } from '../../model/categoria';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:Categoria[];

  constructor(public navCtrl: NavController, 
              private service: CategoriaServerProvider) {

  }

  ionViewDidLoad() {
    this.service.buscarTodos().subscribe(response =>{
     
      this.items = response;

    },
    error =>{
      console.log(error);
    })
  }

  openCategoria(){
    this.navCtrl.push('CategoriaPage');
  }

  categoriaEditar(item : any){
    this.navCtrl.push('UpdatePage',{"item": item});
  }

}
