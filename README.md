# fea-2018
###### Repositório utilizado na disciplina de Front-end avançada da Pós UFG 2018

**Integrantes:**
- Bruno Faria Pinheiro
- Michael Alexandre Da Silva Sampietro

**Ferramentas utilizadas:**
- Node.js
- Typescript
- Visual Studio

O primeiro passo é executar o comando `npm install` para baixar as dependências.

Depois, se aparecer uma mensagem informando sobre vulnerabilidades nas dependências, executar o comando `npm audit fix`.

Nesse momento pode ser que o Visual Studio mostre erros nas dependências, como se não as tivesse encontrando. Se for o caso basta fechar e abrir o Visual Studio novamente.

Para iniciar o projeto, basta executar o comando: `ng serve`. O servidor será iniciado no endereço http://localhost:4200
  
Utilizamos como base o site da Saraiva e recriamos a estrutura da página inicial, da página de produtos e do carrinho.
  
Criamos apenas os produtos exibidos na seção "Os mais vendidos" da home para servirem de exemplo. Como não usamos nenhum banco de dados nesse projeto, os produtos foram criados em um array.
  
Clicando em um produto você é redirecionado para a página dele. Nela é possível ver algumas informações dele, como seu nome, preço e descrição.
  
Clicando no botão "Comprar" o produto é adicionado ao carrinho e clicando no carrinho você é direcionado para a página dele. Nela é possível realizar as ações típicas de um carrinho de compras: visualizar os produtos, excluir um a um ou limpar todo o carrinho, alterar a quantidade de um produto, clicar em "Continuar comprando" para voltar à home, ou finalizar a compra.
