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


## useCart
<br>

Nessa aplicação fiz um custom hook para o carrinho de compras, o contexto do mesmo, para passar o Estado em todos os componentes.
<br>
Foi feito o salvamento dos dados do carrinho no localStorage, assim quando a aplicação recarrega não perdemos o que já esta no carrinho.

Usamos o React Toast para alertas customizaveis.

<br> <br>







