const router = require('express').Router(),
      { response } = require('../helpers'),
      { getSemesters } = require('../queries/semesters');

router.get('/', (req, res) => {
  response(res, false, getSemesters);
});

module.exports = router;
