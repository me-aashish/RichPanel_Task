const express = require('express');
const router = express.Router();

const userController = require('../../controller/user-controller');
const planController = require('../../controller/plan-controller');
const authMiddleware = require('../../middleware/auth-request-validator');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/planChart',planController.get);

module.exports = router;