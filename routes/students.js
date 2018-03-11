var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({[
  	{
  		'id': 1,
  		'name': 'John',
  		'last_name': 'White',
  		'semester': 'Frist',
  		'phone': '12345678',
  		'favorite_subject': 'Math'
  	},
  	{
  		'id': 2,
  		'name': 'Anna',
  		'last_name': 'Parker',
  		'semester': 'Third',
  		'phone': '87654321',
  		'favorite_subject': 'History'
  	}
  ]});
});

module.exports = router;
