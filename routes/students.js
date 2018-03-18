const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.json({
    data: [{
  		'id': 1,
  		'name': 'John',
  		'last_name': 'White',
  		'semester': 'First',
  		'phone': '123-123-1236',
  		'favorite_subject': 'Music'
  	},
  	{
  		'id': 2,
  		'name': 'Anna',
  		'last_name': 'Parker',
  		'semester': 'Third',
  		'phone': '876-543-2215',
  		'favorite_subject': 'History'
  	}],
    isError: false
  });
});

module.exports = router;


/*http://choices4learning.com/home/quick-stop-resources-2/articles-on-learning/school-subjects-list/*/
