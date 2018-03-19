const router = require('express').Router(),
      { response } = require('../helpers'),
      { getSubjects } = require('../queries/subjects');

router.get('/', (req, res) => {
  response(res, false, getSubjects);
});

module.exports = router;
