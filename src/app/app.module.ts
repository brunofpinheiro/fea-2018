import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoThumbnailComponent } from './produto_thumbnail/produto.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'produto', component: PaginaProdutoComponent },
	{ path: 'carrinho', component: CarrinhoComprasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoThumbnailComponent,
    HeaderComponent,
    NavbarComponent,
    PaginaProdutoComponent,
    HomeComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
		AngularFontAwesomeModule,
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
