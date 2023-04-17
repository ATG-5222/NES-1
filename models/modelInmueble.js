const db = require('../util/database');

module.exports = class Inmueble {

    static fetchLastFour(){
        return db.execute(
            'SELECT * FROM inmueble WHERE activo = 1 ORDER BY idInmueble DESC LIMIT 4'
        );
    }

    static numResultsSearchPage(){
        return db.execute(
            'SELECT COUNT(idInmueble) as total FROM inmueble WHERE activo = 1'
        );
    }

    static limitSearchPage(start,end){
        return db.execute(
            'SELECT I.idInmueble as idInmueble, I.nombre as nombreInmueble,TM.nombre as nombreMovimiento, I.precio as precio FROM inmueble I JOIN tipomovimiento TM WHERE I.idTipoMovimiento = TM.idTipoMovimiento AND I.activo = 1 LIMIT ?,?',
            [start,end]
        );
    }

}