DROP DATABASE IF EXISTS cards_db;

CREATE DATABASE cards_db;

USE cards_db;
CREATE TABLE baseball
(
	id int NOT NULL AUTO_INCREMENT,
	cardnumber INTEGER NOT NULL,
	name varchar(255) NOT NULL,
	setname varchar(255) NOT NULL,
	cardyear INTEGER NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (1, "Hank Aaron", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (2, "Richie Ashburn", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (3, "Ernie Banks", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (4, "Ken Boyer", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (5, "Orlando Cepeda", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (6, "Bob Cerv", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (7, "Rocky Colavito", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (8, "Del Crandall", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (9, "Jim Davenport", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (10, "Don Drysdale", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (11, "Nellie Fox", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (12, "Jackie Jensen", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (13, "Harvey Kuenn", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (14, "Mickey Mantle", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (15, "Willie Mays", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (16, "Bill Mazeroski", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (17, "Roy McMillan", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (18, "Billy Pierce", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (19, "Roy Sievers", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (20, "Duke Snider", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (21, "Gus Triandos", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (22, "Bob Turley", "Bazooka", 1959);

INSERT INTO baseball (cardnumber, name, setname, cardyear)
VALUES (23, "Vic Wertz", "Bazooka", 1959)