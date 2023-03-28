const Inmueble = require('../models/modelInmueble');
const InmuebleFoto = require('../models/modelInmuebleFoto');
const Foto = require('../models/modelFoto');

exports.getSearchpage = async(req,res,next) => {;
    res.render('searchpage');
};