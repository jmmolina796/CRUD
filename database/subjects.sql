CREATE DATABASE crudDB;

USE crudDB;

CREATE TABLE subjects (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  description TEXT
);

INSERT INTO subjects VALUES (1, 'History', 'History Helps Us Understand Change and How the Society We Liv in Came.');
INSERT INTO subjects VALUES (2, 'Chemistry', 'The branch of science that deals with the identification of the substances of which matter is composed.');
INSERT INTO subjects VALUES (3, 'Music', 'Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.');
