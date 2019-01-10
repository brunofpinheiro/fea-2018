import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-thumbnail',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoThumbnailComponent {
  desc = 'Playstation VR';
  vendidoPor = 'Vendido por Saraiva';
  precoDe = '2.999,00';
  precoPor = '1.583,12';
  parcelamento = 'em 1x no crédito';
}
