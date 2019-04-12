import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasComponent } from '../carrinho-compras/carrinho-compras.component';
import carrinhoCompras, { Carrinho } from 'src/db/carrinho';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {

	_carrinho: Carrinho;
	logoImgSrc: string;
	logoAlt: string;
	wishlistImgSrc: string;
	wishlistAlt: string;
	shoppingCartImgSrc: string;
	shoppingCartAlt: string;
	cartCount: number;

	constructor() {
		// const carrinho = new CarrinhoComprasComponent();
		// this._carrinho = carrinho.LerCarrinho();
		// this.cartCount = carrinho.QuantidadeItensCarrinho();
	}
	
	ngOnInit() {
		this.logoImgSrc = "../assets/images/saraiva_logo.png";
		this.logoAlt = "Saraiva logo";
	
		this.wishlistImgSrc = "../assets/images/heart.png";
		this.wishlistAlt    = "Lista de desejos";
	
		this.shoppingCartImgSrc = "../assets/images/shopping_cart.png";
		this.shoppingCartAlt    = "Carrinho";
	}

}
