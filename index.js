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

/*
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
*/

// WHERE

/*
var query = database
  .select(['id', 'preco'])
  .where({ nome: 'Mists of Noyah' })
  .table('games');
console.log(query.toQuery());

query = database
  .select(['id', 'preco'])
  .where({ nome: 'Mists of Noyah' })
  .where({ id: 2 })
  .orWhere({ id: 6 })
  .table('games');
console.log(query.toQuery());

query = database
  .select(['id', 'preco'])
  .whereRaw("nome = 'Mists of Noyah' OR preco > 50")
  .table('games');
console.log(query.toQuery());

database
  .select(['id', 'nome', 'preco'])
  .whereRaw("nome = 'Mists of Noyah' OR preco > 120")
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

database
  .raw('SELECT * FROM games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// DELETE

/*
database
  .where({ id: 3 })
  .delete()
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// UPDATE

/*
database
  .where({ id: 5 })
  .update({ preco: 100.0 })
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// ORDER BY

/*
database
  .select()
  .table('games')
  .orderBy('preco', 'desc')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/**
 * Relacionamentos
 *
 * 1 -> 1
 * 1 -> N
 * N -> N
 */
