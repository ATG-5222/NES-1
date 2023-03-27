const Inmuebles = require('../models/modelInmuebles');

exports.getHomepage = (req,res,next) => {;
    Inmuebles.fetchLastFour()
        .then(([rows, fieldData]) => {
            res.render('Homepage', {
                inmuebles: rows,
            });
        })
        .catch(error => { console.log(error) });
};