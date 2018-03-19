const router = require('express').Router(),
      { response } = require('../helpers'),
      { getSubjects, insertSubject, updateSubject, deleteSubject } = require('../queries/subjects');

router.get('/', (req, res) => {
  response(res, false, getSubjects);
});

router.post('/', (req, res) => {
  const { subject } = req.body;
  response(res, false, insertSubject, subject);
});

router.put('/', (req, res) => {
  const { subject, id } = req.body;
  response(res, false, updateSubject, subject, id);
});

router.delete('/', (req, res) => {
  const { id } = req.query;
  response(res, false, deleteSubject, id);
});

module.exports = router;
