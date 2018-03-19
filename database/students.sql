USE crudDB;

CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20),
  last_name VARCHAR(20),
  phone CHAR(12),
  id_semester INT NOT NULL,
  id_subject INT NOT NULL,
  FOREIGN KEY (id_subject) REFERENCES subjects(id),
  FOREIGN KEY (id_semester) REFERENCES semesters(id)
);

INSERT INTO students VALUES (1, 'John', 'White', '123-123-1234', 1, 1);
INSERT INTO students VALUES (2, 'Emily', 'Johnson', '273-112-7048', 4, 3);
INSERT INTO students VALUES (3, 'Michael', 'Miller', '228-858-3428', 5, 2);
