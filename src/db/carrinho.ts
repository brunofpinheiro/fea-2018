import { Produto } from './produtos';

export interface Carrinho {
	produtos: Produto[],
	valorFrete: number
}

var carrinhoCompras: Carrinho = {
	produtos: [],
	valorFrete: 0
}

export default carrinhoCompras;