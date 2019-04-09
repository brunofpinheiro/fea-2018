import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import produtosLista from 'src/db/produtos';
import carrinhoCompras from 'src/db/carrinho';
import { CarrinhoComprasComponent } from '../carrinho-compras/carrinho-compras.component';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

	produto: any;
	lastname: any;

	public constructor(
		private route: ActivatedRoute,
		public carrinhoAplicacao: CarrinhoComprasComponent) {
		this.route.queryParams.subscribe(produto => {
				this.produto = produto
		});
	}

	ngOnInit() { }

	public calculaEconomia(): number {
		if(this.produto.precoPor && this.produto.precoDe ) {
			const precoPor = this.produto.precoPor.replace(',', '.');
			const precoDe  = this.produto.precoDe.replace(',', '.');
			return Number(precoDe) - Number(precoPor)
		} else {
			return 0;
		}
	}

	public AdicionarAoCarrinho(idProduto:number) {
		const indexProduto = this.ProcurarItemNaListaDeProdutos(idProduto);
		let carrinho = this.carrinhoAplicacao;
		if (carrinho.AdicionarProdutoNoCarrinho(produtosLista[indexProduto])) {
			alert("sucesso");
		} else {
			alert ("nao foi possivel");
		}
		console.log(carrinho);
	}
	
	private ProcurarItemNaListaDeProdutos(idProduto: number): number {
		return produtosLista.findIndex(produto => produto.id == idProduto);
	}
}
