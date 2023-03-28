const Inmueble = require('../models/modelInmueble');
const InmuebleFoto = require('../models/modelInmuebleFoto');
const Foto = require('../models/modelFoto');

exports.getSearchpage = (req,res,next) => {;
    res.render('searchpage');
};