const router = require('express').Router(),
      { response } = require('../helpers'),
      { getSubjects, insertSubject, updateSubject } = require('../queries/subjects');

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

module.exports = router;
