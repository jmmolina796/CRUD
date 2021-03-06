module.exports.getStudents = async (cn) => {
  const { data } = await cn.query(`
    SELECT s.id, s.name name, s.last_name last_name, s.phone phone, e.name semester, u.name favorite_subject
    FROM students s
    JOIN semesters e
    ON s.id_semester = e.id
    JOIN subjects u
    ON s.id_subject = u.id
  `);
  return data;
};

module.exports.insertStudent = async (cn, student) => {
  const { info: { insertId } } = await cn.query(`
    INSERT INTO students
    SET ?
  `, student);
  const { data } = await cn.query(`
    SELECT s.id, s.name name, s.last_name last_name, s.phone phone, e.name semester, u.name favorite_subject
    FROM students s
    JOIN semesters e
    ON s.id_semester = e.id
    JOIN subjects u
    ON s.id_subject = u.id
    WHERE s.id = ?
  `, insertId);
  return data;
};

module.exports.updateStudent = async (cn, student, id) => {
  await cn.query(`
    UPDATE students
    SET ?
    WHERE id = ?
  `, [student, id]);
  const { data } = await cn.query(`
    SELECT s.id, s.name name, s.last_name last_name, s.phone phone, e.name semester, u.name favorite_subject
    FROM students s
    JOIN semesters e
    ON s.id_semester = e.id
    JOIN subjects u
    ON s.id_subject = u.id
    WHERE s.id = ?
  `, id);
  return data;
};

module.exports.deleteStudent = async (cn, id) => {
  await cn.query(`
    DELETE FROM students
    WHERE id = ?
  `, id);
  return { id };
};
