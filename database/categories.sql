CREATE DATABASE crudDB;

USE crudDB;

CREATE TABLE categories (
	id_categories INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

INSERT INTO categories VALUES (1, 'Fine arts');
INSERT INTO categories VALUES (2, 'Applied arts ');
INSERT INTO categories VALUES (3, 'Math');
INSERT INTO categories VALUES (4, 'Social studies');
INSERT INTO categories VALUES (5, 'Computers');
INSERT INTO categories VALUES (6, 'Science');
