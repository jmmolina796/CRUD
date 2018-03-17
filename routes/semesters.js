const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.json({
    data: [{
  		'id': 1,
  		'name': 'First',
  	},
  	{
      'id': 2,
  		'name': 'Second',
  	},
    {
      'id': 3,
  		'name': 'Third',
  	}],
    isError: false
  });
});

module.exports = router;
