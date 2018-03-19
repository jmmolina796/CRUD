const router = require('express').Router(),
      { response } = require('../helpers'),
      { getStudents } = require('../queries/students');

router.get('/', (req, res) => {
  response(res, false, getStudents);
});

module.exports = router;
