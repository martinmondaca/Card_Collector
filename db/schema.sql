DROP DATABASE IF EXISTS cards_db;

CREATE DATABASE cards_db;

USE cards_db;
CREATE TABLE cards
(
	id int NOT NULL AUTO_INCREMENT,
	cardnumber INTEGER,
	name varchar(255),
	setname varchar(255),
	cardyear INTEGER,
	PRIMARY KEY (id)
);