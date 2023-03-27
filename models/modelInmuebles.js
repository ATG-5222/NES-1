const db = require('../util/database');

module.exports = class Inmuebles {

    static fetchLastFour() {
        return db.execute(
            'SELECT * FROM inmueble WHERE activo = 1 ORDER BY idInmueble DESC LIMIT 4;'
        );
    }

}