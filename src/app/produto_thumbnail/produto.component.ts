import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-thumbnail',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoThumbnailComponent {
  imgPath = "../assets/images/";

    produtosLista = [
      { 
        "desc": "Resident Evil 2 - PS4", 
        "vendidoPor": "Vendido por Saraiva", 
        "precoDe": "249,90", 
        "precoPor": "219,91", 
        "parcelamento": "em 8x de R$ 31,24",
        "imagem": this.imgPath + "resident_evil2.jpg",
        "alt": "Resident Evil 2 - PS4"
      },
      { 
        "desc": "Spider-Man - PS4", 
        "vendidoPor": "Vendido por Saraiva",  
        "precoDe": "199,00", 
        "precoPor": "157,52", 
        "parcelamento": "em 5x de R$ 35,80",
        "imagem": this.imgPath + "spider_man.png",
        "alt": "Spider-Man - PS4"
      },
      { 
        "desc": "Metal Gear Survive - PS4", 
        "vendidoPor": "Vendido por Saraiva",  
        "precoDe": "149,90", 
        "precoPor": "21,91", 
        "parcelamento": "em 1x de R$ 24,90",
        "imagem": this.imgPath + "metal_gear_survive.png",
        "alt": "Metal Gear Survive - PS4"
      },
      { 
        "desc": "God Of War - PS4", 
        "vendidoPor": "Vendido por Saraiva", 
        "precoDe": "199,90", 
        "precoPor": "113,52", 
        "parcelamento": "em 4x de R$ 32,25",
        "imagem": this.imgPath + "god_of_war.png",
        "alt": "God Of War - PS4"
      },
    ];
}