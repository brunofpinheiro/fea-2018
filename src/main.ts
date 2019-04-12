import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import carrinhoCompras from './db/carrinho';

if (environment.production) {
  enableProdMode();
}

var carrinho = JSON.parse(localStorage.getItem('carrinho'));
if (carrinho == null) {
	console.log('Carrinho vazio!');
	localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras));
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
