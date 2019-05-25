const express = require('express');
const mainController = require('../controllers/MainController');
const loginController = require('../controllers/LoginController');
const router = express.Router();
const app = require('../../ApplicationInstance');

// ============================================ \\
// =============== GET REQUESTS =============== \\

router.route('/').get(mainController.home);
router.route('/signup').get(mainController.signup);
router.route('/login').get(mainController.login);
router.route('/profile').get(mainController.profile);











// ============================================ \\
// ============== POST REQUESTS =============== \\
router.route('/login').post(loginController.login);
router.route('/signup').post(loginController.signup);











module.exports = router;
