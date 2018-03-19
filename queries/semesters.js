module.exports.getSemesters = async (cn) => {
  const { data } = await cn.query(`
    SELECT *
    FROM semesters
  `);
  return data;
};
