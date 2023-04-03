const Inmueble = require('../models/modelInmueble');


exports.getSearchpage = (req,res,next) => {
    console.log("Este es el render basico de la pagina");
    res.render('searchpage');
};

exports.getPrincipalSearchpage = async(req,res,next) => {
    console.log("Este es el controller de ajax");
    inmuebles = await Inmueble.principalSearchPage();
    res.status(200).json({code:200,code:"Ok",data:inmuebles[0]})
};

//Modificar esto
exports.getAjaxSearchpage = (req,res,next) => {
    res.render('searchpage', {
        params: req.params.valor ? req.params.valor : ' ',
    });
};