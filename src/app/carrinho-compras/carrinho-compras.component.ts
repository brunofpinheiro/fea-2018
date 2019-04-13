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
	_listaProdutos: any;

	constructor(private route: ActivatedRoute) { 
		this._carrinho = this.LerCarrinho();
		this.CalcularListaDeProdutos();
	}

  ngOnInit() {
	}

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

	private CalcularListaDeProdutos() {
		this.SetCarrinho();

		this._listaProdutos = this.removeDuplicates(this._carrinho.produtos, "id");
	}

	private CalcularQuantidadeDoItem(idItem: number): number {
		var count = 0;
		this._carrinho.produtos.forEach(x => { 
			if (x.id == idItem) { 
				count = (count || 0)+1; 
			}
		});

		return count;
	}

	private removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
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

	public FinalizarCompra() {
		this.PersistirCarrinho(carrinhoCompras);
		this.SetCarrinho();
		this.CalcularListaDeProdutos();
		alert("Compra finalizada!");
	}

	public LimparCarrinho() {
		this.PersistirCarrinho(carrinhoCompras);
		this.SetCarrinho();
		this.CalcularListaDeProdutos();
		alert("Carrinho Limpo!");
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
