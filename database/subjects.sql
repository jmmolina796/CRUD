USE crudDB;

CREATE TABLE subjects (
  id_subject INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  id_category INT NOT NULL,
  id_semester INT NOT NULL,
  credits INT,
  FOREIGN KEY (id_category) REFERENCES categories(id),
  FOREIGN KEY (id_semester) REFERENCES semesters(id)
);

INSERT INTO subjects VALUES (1, 'History', 2, 1, 4);
INSERT INTO subjects VALUES (2, 'Chemistry', 1, 2, 5);
INSERT INTO subjects VALUES (3, 'Music', 3, 1, 3);
