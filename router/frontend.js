const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontend/frontendController');

router.get('/', frontendController.home)
.get('/about', frontendController.about)
.get('/contact', frontendController.contact)
.post('/contact', frontendController.sendMailToUser);
router.get('/login', frontendController.login);
router.get('/registration', frontendController.registration);
router.post('/registration', frontendController.userRegistration)

module.exports = router;