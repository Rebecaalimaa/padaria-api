const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');
const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/itemPedido');
const Funcionario = require('./controllers/funcionario');
const Estoque = require('./controllers/movimentoEstoque');
const Produto = require('./controllers/produto');
const Fornecedor = require('./controllers/fornecedor');
const MiddlewareAuth = require('./middlewares/auth');

routes.get('/', (req, res) => {
  const api = {
    titulo: 'Padaria Paladar Nobre',
    versao: '1.0.0',
    rotas: [
      // Login
      { metodo: 'POST', caminho: '/api/login' },
      { metodo: 'GET', caminho: '/api/login' },

      // Clientes
      { metodo: 'GET', caminho: '/api/clientes' },
      { metodo: 'GET', caminho: '/api/clientes/:id' },
      { metodo: 'POST', caminho: '/api/clientes' },
      { metodo: 'PATCH', caminho: '/api/clientes/:id' },
      { metodo: 'DELETE', caminho: '/api/clientes/:id' },

      // Produtos
      { metodo: 'GET', caminho: '/api/produtos' },
      { metodo: 'POST', caminho: '/api/produtos' },
      { metodo: 'PATCH', caminho: '/api/produtos/:id' },
      { metodo: 'DELETE', caminho: '/api/produtos/:id' },

      // Pedidos
      { metodo: 'GET', caminho: '/api/pedidos' },
      { metodo: 'GET', caminho: '/api/pedidos/:id' },
      { metodo: 'POST', caminho: '/api/pedidos' },
      { metodo: 'PATCH', caminho: '/api/pedidos/:id' },
      { metodo: 'DELETE', caminho: '/api/pedidos/:id' },

      // Itens de Pedido
      { metodo: 'GET', caminho: '/api/item' },
      { metodo: 'GET', caminho: '/api/item/:id' },
      { metodo: 'POST', caminho: '/api/item' },
      { metodo: 'PATCH', caminho: '/api/item/:id' },
      { metodo: 'DELETE', caminho: '/api/item/:id' },

      // Funcionários
      { metodo: 'GET', caminho: '/api/funcionarios' },
      { metodo: 'GET', caminho: '/api/funcionarios/:id' },
      { metodo: 'POST', caminho: '/api/funcionarios' },
      { metodo: 'PATCH', caminho: '/api/funcionarios/:id' },
      { metodo: 'DELETE', caminho: '/api/funcionarios/:id' },

      // Movimento de Estoque
      { metodo: 'GET', caminho: '/api/estoque' },
      { metodo: 'GET', caminho: '/api/estoque/:id' },
      { metodo: 'POST', caminho: '/api/estoque' },
      { metodo: 'PATCH', caminho: '/api/estoque/:id' },
      { metodo: 'DELETE', caminho: '/api/estoque/:id' },

      // Fornecedores
      { metodo: 'GET', caminho: '/api/fornecedores' },
      { metodo: 'GET', caminho: '/api/fornecedores/:id' },
      { metodo: 'POST', caminho: '/api/fornecedores' },
      { metodo: 'PATCH', caminho: '/api/fornecedores/:id' },
      { metodo: 'DELETE', caminho: '/api/fornecedores/:id' }
    ]
  };
  res.json(api);
  });

routes.post('/api/login', Login.login);
routes.get('/api/login', Login.validaToken);


routes.get('/api/clientes', MiddlewareAuth.validate, Cliente.read);
routes.get('/api/clientes/:id', MiddlewareAuth.validate, Cliente.readOne);
routes.post('/api/clientes', Cliente.create);
routes.patch('/api/clientes/:id', MiddlewareAuth.validate, Cliente.update);
routes.delete('/api/clientes/:id', MiddlewareAuth.validate, Cliente.remove);

routes.get('/api/produtos', Produto.read);
routes.post('/api/produtos', MiddlewareAuth.validate, Produto.create);
routes.patch('/api/produtos/:id', MiddlewareAuth.validate, Produto.update);
routes.delete('/api/produtos/:id', MiddlewareAuth.validate, Produto.remove);

routes.get('/api/pedidos', MiddlewareAuth.validate, Pedido.read);
routes.get('/api/pedidos/:id', MiddlewareAuth.validate, Pedido.readOne);
routes.post('/api/pedidos', MiddlewareAuth.validate, Pedido.create);
routes.patch('/api/pedidos/:id', MiddlewareAuth.validate, Pedido.update);
routes.delete('/api/pedidos/:id', MiddlewareAuth.validate, Pedido.remove);

routes.get('/api/item', MiddlewareAuth.validate, Item.read);
routes.get('/api/item/:id', MiddlewareAuth.validate, Item.readOne);
routes.post('/api/item', MiddlewareAuth.validate, Item.create);
routes.patch('/api/item/:id', MiddlewareAuth.validate, Item.update);
routes.delete('/api/item/:id', MiddlewareAuth.validate, Item.remove);

routes.get('/api/funcionarios', MiddlewareAuth.validate, Funcionario.read);
routes.get('/api/funcionarios/:id', MiddlewareAuth.validate, Funcionario.readOne);
routes.post('/api/funcionarios', MiddlewareAuth.validate, Funcionario.create);
routes.patch('/api/funcionarios/:id', MiddlewareAuth.validate, Funcionario.update);
routes.delete('/api/funcionarios/:id', MiddlewareAuth.validate, Funcionario.remove);

routes.get('/api/estoque', MiddlewareAuth.validate, Estoque.read);
routes.get('/api/estoque/:id', MiddlewareAuth.validate, Estoque.readOne);
routes.post('/api/estoque', MiddlewareAuth.validate, Estoque.create);
routes.patch('/api/estoque/:id', MiddlewareAuth.validate, Estoque.update);
routes.delete('/api/estoque/:id', MiddlewareAuth.validate, Estoque.remove);

routes.get('/api/fornecedores', MiddlewareAuth.validate, Fornecedor.read);
routes.get('/api/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.readOne);
routes.post('/api/fornecedores', MiddlewareAuth.validate, Fornecedor.create);
routes.patch('/api/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.update);
routes.delete('/api/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.remove);



module.exports = routes;