const Inmueble = require('../models/modelInmueble');
const InmuebleFoto = require('../models/modelInmuebleFoto');
const Foto = require('../models/modelFoto');

exports.getHomepage = async(req,res,next) => {;
    const inmuebles = await Inmueble.fetchLastFour();
    for (let i = 0; i < inmuebles[0].length; i++) {
        const imgId = await InmuebleFoto.fetchIdImagenInmueble(inmuebles[0][i].idInmueble);
        const imgSrc = await Foto.fetchImagenInmueble(imgId[0][0].idFoto);
        inmuebles[0][i].img = imgSrc[0][0].archivo;
    }
    res.render('homepage', {
        inmuebles: inmuebles[0],
    });
};