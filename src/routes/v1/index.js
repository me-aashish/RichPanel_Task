const express = require('express');
const router = express.Router();

const userController = require('../../controller/user-controller');
const planController = require('../../controller/plan-controller');
const authMiddleware = require('../../middleware/auth-request-validator');
const stripeController = require('../../controller/stripe-controller');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/planChart',planController.get);
router.post('/stripe', stripeController.stripeCont);

module.exports = router;