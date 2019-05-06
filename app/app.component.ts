import { Component } from '@angular/core';
import carrinhoCompras from '../db/produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'saraiva';

	public AppComponent() {
		console.log('app component');
	}
}