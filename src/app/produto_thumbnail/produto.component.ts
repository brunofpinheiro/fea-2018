import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import produtosLista, { Produto } from 'src/db/produtos';

@Component({
	selector: 'app-produto-thumbnail',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
	imgPath = "../assets/images/";
	produtos: Produto[] = produtosLista;

	public constructor(
		private router: Router,
	) { }

	public visualizarProduto(produto: Produto) {
		console.log(produto)
		const navigationExtras: any = {
			queryParams: produto
		};

		this.router.navigate(["produto"], navigationExtras);
	}
}