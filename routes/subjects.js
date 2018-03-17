const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.json({
    data: [{
  		'id': 1,
  		'name': 'History',
      'category': 'Social studies',
      'semester': 'First',
  		'credits': 4,
  	},
  	{
      'id': 2,
  		'name': 'Chemistry',
      'category': 'Science',
      'semester': 'Second',
  		'credits': 5
  	},
    {
      'id': 3,
  		'name': 'Music',
      'category': 'Fine arts',
      'semester': 'First',
  		'credits': 3
  	}],
    isError: false
  });
});

module.exports = router;
