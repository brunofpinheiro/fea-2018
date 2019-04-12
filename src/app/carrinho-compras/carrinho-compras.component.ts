import { Component, OnInit, Injectable } from '@angular/core';
import { Produto } from 'src/db/produtos';
import carrinhoCompras, { Carrinho } from 'src/db/carrinho';
import { ActivatedRoute } from '@angular/router';

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

	constructor(private route: ActivatedRoute) { 
		this._carrinho = this.LerCarrinho();
	}

  ngOnInit() { }

	public QuantidadeItensCarrinho(): number {
		this.SetCarrinho();
		return this._carrinho.produtos.length
	}

	public ValorPago(): number {
		let valorTotalCarrinho: number = 0;
		
		this.SetCarrinho();
		this._carrinho.produtos.forEach(produto => {
			valorTotalCarrinho += produto.precoPor
		});

		return valorTotalCarrinho;
	}

	public ValorOriginalCarrinho(): number {
		let valorTotalCarrinho: number = 0;
		
		this.SetCarrinho();
		this._carrinho.produtos.forEach(produto => {
			valorTotalCarrinho += produto.precoDe
		});

		return valorTotalCarrinho;
	}

	public DescontoTotalCarrinho(): number {
		let valorRealDeVenda: number = this.ValorPago();

		let valorAntigoDeVenda: number = 0;

		this.SetCarrinho();
	  this._carrinho.produtos.forEach(produto => {
			valorAntigoDeVenda += produto.precoDe
		});

		return valorAntigoDeVenda - valorRealDeVenda;
	}

	public AdicionarProdutoNoCarrinho(produto: Produto): boolean {
		this.SetCarrinho();
		if (this._carrinho.produtos.push(produto)) {
			this.PersistirCarrinho(this._carrinho);
			return true;
		}
		
		return false;
	}

	public RemoverProdutoDoCarrinho(produto: Produto): boolean {
		this.SetCarrinho();

		const posicaoProduto = this._carrinho.produtos.indexOf(produto);

		if (this._carrinho.produtos.splice(posicaoProduto)) {
			this.PersistirCarrinho(this._carrinho);
			return true;
		}
		return false;
	}

	private PersistirCarrinho(carrinho: Carrinho): void {
		localStorage.setItem('carrinho', JSON.stringify(carrinho))
	}

	private SetCarrinho(): void {
		this._carrinho = this.LerCarrinho();
	}

	public LerCarrinho (): Carrinho {
		return JSON.parse(localStorage.getItem('carrinho'));
	}
}
