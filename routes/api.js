var express = require('express');
var router = express.Router();

// get controllers
var postController = require('../controllers/postController');
var commentController = require('../controllers/commentController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is api');
});

module.exports = router;

