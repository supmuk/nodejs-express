const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontend/frontendController');

router.get('/', frontendController.home);
router.get('/about', frontendController.about);
router.get('/contact', frontendController.contact);
router.get('/login', frontendController.login);
router.get('/registration', frontendController.registration);
router.post('/registration', frontendController.userRegistration)
module.exports = router;