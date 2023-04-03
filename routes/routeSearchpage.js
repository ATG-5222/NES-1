const express = require('express');
const router = express.Router();

const searchpageController = require('../controllers/controllerSearchpage');

router.get('/busqueda_datos/:valor', searchpageController.getAjaxSearchpage);
router.get('/busqueda_datos', searchpageController.getPrincipalSearchpage);
router.get('/', searchpageController.getSearchpage);

module.exports = router;