# Desafio 01 - RocketShoes

Nesse desafio, tinha que refatorar um projeto, dividindo o mesmo em alguns componentes. 



Essa era uma aplicação onde o seu principal objetivo é criar um hook de carrinho de compras. 

- Adicionar um novo produto ao carrinho;
- Remover um produto do carrinho;
- Alterar a quantidade de um produto no carrinho;
- Cálculo dos preços sub-total e total do carrinho;
- Validação de estoque;
- Exibição de mensagens de erro;
- Entre outros.

A seguir veremos com mais detalhes o que e como precisa ser feito 🚀
<br>
<br>


## Manipulação de Estado 
<br>

Nessa aplicação fiz um custom hook para o carrinho de compras, o contexto do mesmo, para passar o Estado em todos os componentes.
<br>
Foi feito o salvamento dos dados do carrinho no localStorage, assim quando a aplicação recarrega não perdemos o que já esta no carrinho.

Usamos o React Toast para alertas customizaveis.

![video](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f166455c-a42f-4d25-8baa-a6686a3cb476/challenge.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T193409Z&X-Amz-Expires=86400&X-Amz-Signature=e24c1d170ea06b7683d255792e9f84bdbf18942767156bbee0375001e6eadb9f&X-Amz-SignedHeaders=host)
<br> <br>







