const db = require('../util/database');

module.exports = class Foto {

    static fetchImagenInmueble(id) {
        return db.execute(
            'SELECT archivo FROM foto WHERE idFoto = ?', [id]
        );
    }

}