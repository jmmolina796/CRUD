USE crudDB;

CREATE TABLE subjects (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  id_categories INT NOT NULL,
  id_semester INT NOT NULL,
  FOREIGN KEY (id_categories) REFERENCES categories (id_categories),
  FOREIGN KEY (id_semester) REFERENCES semester (id_semester),
  credits INT
);

INSERT INTO subjects VALUES (1, 'History', 2, 1, 4);
INSERT INTO subjects VALUES (2, 'Chemistry', 1, 2, 5);
INSERT INTO subjects VALUES (3, 'Music', 3, 1, 3);
