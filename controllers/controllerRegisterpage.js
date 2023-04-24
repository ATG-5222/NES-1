const Inmueble = require('../models/modelInmueble');

exports.getRegisterpage = (req,res,next) => {
    res.render('registerpage');
};

exports.getCategoria = async(req,res,next) => {
    const idCategoria = req.params.categoria;
    console.log(idCategoria);
    const inmueble = await Inmueble.insertDeactivatedRegister(idCategoria.toString());
    const idInmueble = await Inmueble.getDeactivatedRegisterID();
    console.log(idInmueble[0][0].idInmueble);
    res.render('altaInmueble',{
        idInmueble: idInmueble[0][0].idInmueble,
        categoria: idCategoria
    });
};

exports.updateBodyCasa = (req,res,next) => {
    console.log("Entrando a la ruta");
    const {
        name,
        desc,
        tipoMovimiento,
        precio,
    } = req.body;
    const coordX = 10;
    const coordY = 12;
    console.log("name",name);
    console.log("desc",desc);
    console.log("tipoMovimiento",tipoMovimiento);
    console.log("precio",precio);
    console.log("coordX",coordX);
    console.log("coordY",coordY);
    const idInmueble = req.params.inmueble;
    console.log("idInmueble",idInmueble);
    Inmueble.activateInmuebleCasa(name,desc,tipoMovimiento,precio,coordX,coordY,idInmueble)
        .then(() => {
            res.redirect("/alta");
        })
        .catch((error) => {
            console.log(error);
        });
};