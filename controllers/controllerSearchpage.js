const Inmueble = require('../models/modelInmueble');

exports.getPrincipalSearchpage = (req,res,next) => {
    Inmueble.principalSearchPage()
        .then(([rows, fieldData]) => {
            res.send(rows);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAjaxSearchpage = (req,res,next) => {
    res.render('searchpage', {
        params: req.params.valor ? req.params.valor : ' ',
    });
};