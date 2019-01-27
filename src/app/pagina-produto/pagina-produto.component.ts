import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

	produto: any; 
	lastname: any;

  public constructor(private route: ActivatedRoute) {
		this.route.queryParams.subscribe(produto => {
				this.produto = produto
		});
		console.log(this.produto)
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
	


}
