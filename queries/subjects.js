module.exports.getSubjects = async (cn) => {
  const { data } = await cn.query(`
    SELECT s.id, s.name name, c.name category, e.name semester, s.credits
    FROM subjects s
    JOIN categories c
    ON s.id_category = c.id
    JOIN semesters e
    ON s.id_semester = e.id
  `);
  return data;
};

module.exports.insertSubject = async (cn, subject) => {
  console.log(subject);
  const { info: { insertId } } = await cn.query(`
    INSERT INTO subjects
    SET ?
  `, subject);
  const { data } = await cn.query(`
    SELECT s.id, s.name name, c.name category, e.name semester, s.credits
    FROM subjects s
    JOIN categories c
    ON s.id_category = c.id
    JOIN semesters e
    ON s.id_semester = e.id
    WHERE s.id = ?
  `, insertId);
  return data;
};
