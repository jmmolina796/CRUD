module.exports.getCategories = async (cn) => {
  const { data } = await cn.query(`
    SELECT *
    FROM categories
  `);
  return data;
};
