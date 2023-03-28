const Inmueble = require('../models/modelInmueble');
const InmuebleFoto = require('../models/modelInmuebleFoto');
const Foto = require('../models/modelFoto');

exports.getHomepage = async(req,res,next) => {;
    inmuebles = await Inmueble.fetchLastFour();
    for (let i = 0; i < inmuebles[0].length; i++) {
        imgId = await InmuebleFoto.fetchIdImagenInmueble(inmuebles[0][i].idInmueble);
        imgSrc = await Foto.fetchImagenInmueble(imgId[0][0].idFoto);
        //console.log(imgSrc[0][0].archivo)
        inmuebles[0][i].img = imgSrc[0][0].archivo;
    }
    console.log(inmuebles[0])
    res.render('Homepage', {
        inmuebles: inmuebles[0],
    });
};

/*
exports.getHomepage = (req,res,next) => {;
    Inmueble.fetchLastFour()
        .then(([rows, fieldData]) => {
            res.render('Homepage', {
                inmuebles: rows,
            });
        })
        .catch(error => { console.log(error) });
};*/