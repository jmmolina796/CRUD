const router = require('express').Router(),
      { response } = require('../helpers'),
      { getSubjects, insertSubject } = require('../queries/subjects');

router.get('/', (req, res) => {
  response(res, false, getSubjects);
});

router.post('/', (req, res) => {
  const { subject } = req.body;
  response(res, false, insertSubject, subject);
});

module.exports = router;
