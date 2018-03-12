USE crudDB;

CREATE TABLE students (
  id_student INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20),
  last_name VARCHAR(20),
  semester VARCHAR(10),
  phone INT,
  id_subject INT NOT NULL,
  FOREIGN KEY (id_subject) REFERENCES subjects (id)
);

INSERT INTO students VALUES (1, 'John', 'White', 'First', 12345678, 1);
INSERT INTO students VALUES (2, 'Emily', 'Johnson', 'Sixth', 12345678, 3);
INSERT INTO students VALUES (3, 'Michael', 'Miller', 'Third', 12345678, 2);
