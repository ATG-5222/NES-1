const express = require('express');
const router = express.Router();

const dropzoneController = require('../controllers/controllerDropzone');

router.post('/upload', dropzoneController.uploadMedia);
router.get('/', dropzoneController.getDropzonePage);

module.exports = router;