import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

}
