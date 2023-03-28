const db = require('../util/database');

module.exports = class InmuebleFoto {

    static fetchIdImagenInmueble(id) {
        return db.execute(
            'SELECT idFoto FROM inmueble_foto WHERE idInmueble = ?', [id]
        );
    }

}