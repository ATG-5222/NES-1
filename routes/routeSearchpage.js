const express = require('express');
const router = express.Router();

const searchpageController = require('../controllers/controllerSearchpage');

router.get('inmuebles/:valor', searchpageController.getSearchpage);
router.get('inmuebles/', searchpageController.getSearchpage);

module.exports = router;