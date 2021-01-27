use knexjs;

create table games (
	`id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100),
  `preco` float,
  PRIMARY KEY (`id`)
);