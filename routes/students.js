const router = require('express').Router(),
      { response } = require('../helpers'),
      { getStudents, insertStudent } = require('../queries/students');

router.get('/', (req, res) => {
  response(res, false, getStudents);
});

router.post('/', (req, res) => {
  const { student } = req.body;
  response(res, false, insertStudent, student);
});

module.exports = router;
