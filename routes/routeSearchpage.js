const express = require('express');
const router = express.Router();

const searchpageController = require('../controllers/controllerSearchpage');

router.get('/:page', searchpageController.getSearchpage);
router.get('/', searchpageController.getSearchpage);

module.exports = router;