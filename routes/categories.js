const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.json({
    data: [{
  		'id': 1,
  		'name': 'Fine arts',
  	},
  	{
      'id': 2,
  		'name': 'Applied arts',
  	},
    {
      'id': 3,
  		'name': 'Math',
  	},
    {
      'id': 4,
  		'name': 'Social studies',
  	},
    {
      'id': 5,
  		'name': 'Computers',
  	},
    {
      'id': 6,
  		'name': 'Science',
  	}],
    isError: false
  });
});

module.exports = router;
