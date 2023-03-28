const Inmueble = require('../models/modelInmueble');

exports.getPrincipalSearchpage = (req,res,next) => {
    res.render('searchpage', {
        params: req.params.valor ? req.params.valor : ' ',
    });
};

exports.getAjaxSearchpage = (req,res,next) => {
    res.render('searchpage', {
        params: req.params.valor ? req.params.valor : ' ',
    });
};

/*exports.getSearchpage = (req,res,next) => {
    Inmueble.principalSearchPage(req.params.valor)
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('searchpage', {
                params: req.params.valor ? req.params.valor : 'a',
                inmuebles: rows[0],
            });
        })
        .catch(error => { console.log(error) });
}; */