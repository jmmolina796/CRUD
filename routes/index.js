var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({'data': 'Hello'});
});

module.exports = router;
