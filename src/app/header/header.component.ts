import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  logoImgSrc = "../assets/images/saraiva_logo.png";
  logoAlt = "Saraiva logo";

  wishlistImgSrc = "../assets/images/heart.png";
  wishlistAlt    = "Lista de desejos";

  shoppingCartImgSrc = "../assets/images/shopping_cart.png";
  shoppingCartAlt    = "Carrinho";
  cartCount = 5;
}
