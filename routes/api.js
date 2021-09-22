var express = require('express');
var router = express.Router();

router.use(express.urlencoded());
// router.use(express.json());      // if needed

// get controllers
var postController = require('../controllers/postController');
var commentController = require('../controllers/commentController');
/* GET home page. */
router.get('/', function(req, res) {
  res.send('This is API'); // TODO: redirect to index
});

// Endpoints of the api
router.get('/post', postController.list);
router.post('/post/create', postController.create);
router.get('/post/:id', postController.fetch);

router.get('/post/:id/comments', postController.listComments);
router.post('/post/:id/comment/create', commentController.create);
router.get('/comment/:id', commentController.fetch);

module.exports = router;

