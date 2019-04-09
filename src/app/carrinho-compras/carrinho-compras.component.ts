import { Component, OnInit, Injectable } from '@angular/core';
import { Produto } from 'src/db/produtos';
import carrinhoCompras, { Carrinho } from 'src/db/carrinho';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})

@Injectable({
	providedIn: 'root'
})
export class CarrinhoComprasComponent implements OnInit {

	_carrinho: Carrinho;

  constructor() {	
		this._carrinho = carrinhoCompras;
	}

  ngOnInit() {
	}

	public QuantidadeItensCarrinho(): number {
			return this._carrinho.produtos.length
	}

	public ValorCarrinho(): number {
		let valorTotalCarrinho: number = 0;

		this._carrinho.produtos.forEach(produto => {
			valorTotalCarrinho += produto.precoPor
		});

		return valorTotalCarrinho;
	}

	public DescontoTotalCarrinho(): number {
		let valorRealDeVenda: number = this.ValorCarrinho();

		let valorAntigoDeVenda: number = 0;

	  this._carrinho.produtos.forEach(produto => {
			valorAntigoDeVenda += produto.precoDe
		});

		return valorAntigoDeVenda - valorRealDeVenda;
	}

	public AdicionarProdutoNoCarrinho(produto: Produto): boolean {
		if (this._carrinho.produtos.push(produto))
			return true;
		
		return false;
	}

	public ObterCarrinho(): Carrinho {
		return this._carrinho;
	}

}
