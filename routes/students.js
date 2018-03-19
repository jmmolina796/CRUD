const router = require('express').Router(),
      { response } = require('../helpers'),
      { getStudents, insertStudent, updateStudent, deleteStudent } = require('../queries/students');

router.get('/', (req, res) => {
  response(res, false, getStudents);
});

router.post('/', (req, res) => {
  const { student } = req.body;
  response(res, false, insertStudent, student);
});

router.put('/', (req, res) => {
  const { student, id } = req.body;
  response(res, false, updateStudent, student, id);
});

router.delete('/', (req, res) => {
  const { id } = req.query;
  response(res, false, deleteStudent, id);
});

module.exports = router;
