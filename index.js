var database = require('./database');

// INSERT

/*
var dados = {
  nome: 'Sea of Thieves',
  preco: 50.67,
};

dados = {
  nome: 'Call of Duty',
  preco: 60,
};

dados = [
  {
    nome: 'Call of Duty 2',
    preco: 61,
  },
  {
    nome: 'GTA 5',
    preco: 49,
  },
  {
    nome: 'WoW',
    preco: 129,
  },
];
//var query = database.insert(dados).into('games');
//console.log(query.toQuery());

// promise
database
  .insert(dados)
  .into('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// SELECT

database
  .select('*')
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

database
  .select('id', 'preco')
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// NESTED QUERIES

database
  .insert({
    nome: 'Mists of Noyah',
    preco: 25,
  })
  .into('games')
  .then((data) => {
    console.log(data);
    database
      .select()
      .table('games')
      .where({ id: data })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
