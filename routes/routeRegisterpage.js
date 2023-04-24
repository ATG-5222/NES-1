const express = require('express');
const router = express.Router();

const registerpageController = require('../controllers/controllerRegisterpage');

//Actulizar el cuerpo de una casa
router.post('/cuerpoCasa/:inmueble', registerpageController.updateBodyCasa);
//Ver el formulario dependiendo de la categoria
router.get('/:categoria', registerpageController.getCategoria);
//Ver menu de inmuebles
router.get('/', registerpageController.getRegisterpage);

module.exports = router;