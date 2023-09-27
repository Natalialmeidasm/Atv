// Classe Produto
class Produto {
    constructor(nome, codigo) {
      this.nome = nome;
      this.codigo = codigo;
    }
  }

var arroz = new Produto('Arroz', '12345');
  
  // Classe Cliente
  class Cliente {
    constructor(nome, CPF) {
      this.nome = nome;
      this.CPF = CPF;
    }
  }

  const mysql = require('mysql2');

  // Configuração do MySQL
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TuD0-Em_V0Lt@-tEm_Me-c0nFiRm@d0,-bb_,-QuE_eU-e_V0Cê-S0M0S_c0iS@S-dE_@Lm@.',
    database: 'crud_mauricio',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
  });
    
  
  // Função para inserir um produto
  function inserirProduto(nome, codigo) {
    const sql = 'INSERT INTO produtos (nome, código) VALUES (?, ?)';
    const values = [nome, codigo];
  
    connection.query(sql, values, (err) => {
      if (err) {
        console.error('Erro ao inserir produto:', err);
      } else {
        console.log('Produto inserido com sucesso!');
      }
    });
  }
  
  // Exemplo de inserção de um produto
  const feijao = new Produto('feijão', '54321');
  inserirProduto(feijao.nome, feijao.codigo);
  

  function inserirCliente(nome, CPF) {
    const sql = 'INSERT INTO clientes (nome, CPF) VALUES (?, ?)';
    const values = [nome, CPF];
  
    connection.query(sql, values, (err) => {
      if (err) {
        console.error('Erro ao inserir cliente:', err);
      } else {
        console.log('Cliente inserido com sucesso!');
      }
    });
  }
  
  // Exemplo de inserção de um cliente
  const Joao = new Cliente('João', '278.978.342-30');
  inserirCliente(Joao.nome, Joao.CPF);

//  class BancoDeDados {
//   constructor() {
//     this.connection = mysql.createConnection(dbConfig);
//     this.connection.connect((err) => {
//       if (err) throw err;
//       console.log('Conectado ao MySQL');
//     });
//   }



//   // Método para consultar todos os produtos
//   consultarProdutos(callback) {
//     this.connection.query('SELECT * FROM produtos', (err, results) => {
//       if (err) throw err;
//       callback(results);
//     });
//   }

//   // Outros métodos para atualizar e excluir produtos, e para operações com clientes
// }

// // Exemplo de uso
// const bancoDeDados = new BancoDeDados();

// // Inserir um produto
// const novoProduto = new Produto(1, 'Arroz', 5.99);
// bancoDeDados.inserirProduto(novoProduto);

// // Consultar todos os produtos
// bancoDeDados.consultarProdutos((produtos) => {
//   console.log('Produtos cadastrados:');
//   console.log(produtos);
// });