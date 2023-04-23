const express = require('express');
const router = express.Router();

const registerpageController = require('../controllers/controllerRegisterpage');

router.get('/', registerpageController.getRegisterpage);

module.exports = router;