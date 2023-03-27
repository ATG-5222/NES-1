const express = require('express');
const router = express.Router();

const homepageController = require('../controllers/controllerHomepage');

router.get('/', homepageController.getHomepage);

module.exports = router;