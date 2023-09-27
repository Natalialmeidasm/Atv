// Classe Produto
class Produto {
    constructor(nome, codigo, preço) {
      this.nome = nome;
      this.codigo = codigo;
      this.preco = preço;
    }
  }
  
  // Classe Cliente
  class Cliente {
    constructor(nome, CPF, Email, Senha, DataNascimento) {
      this.nome = nome;
      this.CPF = CPF;
      this.Email = Email;
      this.Senha = Senha;
      this.DataNasc = DataNascimento;
    }
  }

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Configuração do MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'TuD0-Em_V0Lt@-tEm_Me-c0nFiRm@d0,-bb_,-QuE_eU-e_V0Cê-S0M0S_c0iS@S-dE_@Lm@.',
//   database: 'crud_mauricio',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err);
//     return;
//   }
//   console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
// });

// // Funções para inserir produto e cliente (usando os métodos existentes)

// app.post('/inserir-produto', (req, res) => {
//   const { produtoNome, produtoCodigo, produtoPreco } = req.body;
//   inserirProduto(produtoNome, produtoCodigo, produtoPreco);
//   res.send('Produto inserido com sucesso!');
// });

// app.post('/inserir-cliente', (req, res) => {
//   const { clienteNome, clienteCPF, clienteEmail, clienteSenha, clienteDataNascimento } = req.body;
//   inserirCliente(clienteNome, clienteCPF, clienteEmail, clienteSenha, clienteDataNascimento);
//   res.send('Cliente inserido com sucesso!');
// });

// // Função para consultar todos os produtos

// app.get('/consultar-produtos', (req, res) => {
//   selecionarProdutos((results) => {
//     res.json(results);
//   });
// });

// // Função para atualizar um produto

// app.post('/atualizar-produto', (req, res) => {
//   const { produtoCodigoAtualizar, produtoNovoNome, produtoNovoPreco } = req.body;
//   atualizarProduto(produtoCodigoAtualizar, produtoNovoNome, produtoNovoPreco);
//   res.send('Produto atualizado com sucesso!');
// });

// // Função para excluir um produto

// app.post('/excluir-produto', (req, res) => {
//   const { produtoCodigoExcluir } = req.body;
//   excluirProduto(produtoCodigoExcluir);
//   res.send('Produto excluído com sucesso!');
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });

//  TESTE

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TuD0-Em_V0Lt@-tEm_Me-c0nFiRm@d0,-bb_,-QuE_eU-e_V0Cê-S0M0S_c0iS@S-dE_@Lm@.',
  database: 'crud_mauricio',
});

app.use(express.urlencoded({ extended: false }));

app.post('/inserir_dados', (req, res) => {
  const { nome, email } = req.body;

  connection.query('INSERT INTO sua_tabela (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.sendStatus(500);
      return;
    }

    console.log('Dados inseridos com sucesso!');
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
