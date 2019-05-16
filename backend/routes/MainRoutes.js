var express = require('express');
var mainController = require('../controllers/MainController');
var router = express.Router();
var app = require('../../ApplicationInstance');

// ============================================ \\
// =============== GET REQUESTS =============== \\

router.route('/').get(mainController.home);













// ============================================ \\
// ============== POST REQUESTS =============== \\












module.exports = router;
