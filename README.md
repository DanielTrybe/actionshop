# Action Shop

Olá visitante!

Este projeto é particular, estou criando para aprimorar minhas hard skills em React, ContextAPI, NodeJS e MongoDB. O app consiste em um site de vendas que vai conter páginas de listagem de itens, compra, login, cliente e admin.

Ambos necessitam do VS code, mongoDB e node para conseguir rodar.

#### Iniciando

1. Cria uma pasta no seu computador onde preferir e abra o terminal dentro dela ou abra a pasta dentro VScode e então abra o terminal do VScode.
2. Faça o clone do repositório com <code>git clone git@github.com:DanielTrybe/actionshop.git<code>
  
#### Navegando
  
1. Caso abra o VScode na raiz, abra o terminal dentro do VScode e navegue para a pasta API com <code>cd API</code>.
2. Abra um segundo terminal para a aplicação, navegue com <code>cd siteLojaActions</code>, depois <code>cd loja_actions</code>.
  
#### Instruções
 
1. Utilize <code>npm install</code> para instalar as dependências após seguir os detalhes do "Navegando" acima e execute o comando tanto na pasta 'api' quanto no diretório 'siteLojaActions/loja_actions'.
2. Faça a importação do banco de dados que contém no diretório 'api' para seu servidor com o nome do <code>db<code> 'action_figure' e coleção 'scaleFigures'.
3. Inicie a aplicação com <code>npm start</code> no terminal da pasta 'api', após iniciar o servidor, inicie com <code>npm start</code> na 'siteLojaActions/loja_action'.
4. Pronto, pode começar a testar!

## Página inicial

Contém promoções, categorias e campo de pesquisa.

## Página de itens

Lista que contém a busca que o usúario fez anteriormente.

## Página de compra

Carrinho com os itens escolhidos.

## Página cliente

Informações relacionadas a pessoa, como endereço, pedidos e informações de login.

## Página admin

Pessoa administradora que vai fazer a gestão do site, como adicionar, remover ou editar produtos no banco de dados, fazendo a requisição via api.
