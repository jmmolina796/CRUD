const router = require('express').Router(),
      { response } = require('../helpers'),
      { getCategories } = require('../queries/categories');

router.get('/', (req, res) => {
  response(res, false, getCategories);
});

module.exports = router;
