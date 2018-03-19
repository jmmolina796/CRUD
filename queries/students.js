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
