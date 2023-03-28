const express = require('express');
const router = express.Router();

const searchpageController = require('../controllers/controllerSearchpage');

router.get('/:valor', searchpageController.getSearchpage);

module.exports = router;