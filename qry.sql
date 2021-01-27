use knexjs;

create table games (
	`id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100),
  `preco` float(10, 2),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `estudios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `game_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estudios_FK` (`game_id`),
  CONSTRAINT `estudios_FK` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

alter table estudios drop foreign key estudios_FK;

ALTER TABLE estudios DROP COLUMN game_id;

CREATE TABLE `games_estudios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game_id` int DEFAULT NULL,
  `estudio_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `games_estudios_FK_1` (`estudio_id`),
  KEY `games_estudios_FK` (`game_id`),
  CONSTRAINT `games_estudios_FK` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `games_estudios_FK_1` FOREIGN KEY (`estudio_id`) REFERENCES `estudios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO knexjs.games (nome, preco) VALUES('Bully', 20);
INSERT INTO knexjs.games (nome, preco) VALUES('Midnight Club', 12);

INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(4, 5);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(4, 6);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(4, 4);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(7, 6);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(8, 3);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(5, 1);
INSERT INTO knexjs.games_estudios (game_id, estudio_id) VALUES(5, 5);
