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

    static insertDeactivatedRegister(idCategoria){
        return db.execute(
            'INSERT INTO inmueble(idAgenteAlta,idAgenteAsignado,idCategoria,nombre,descripcion,idTipoMovimiento,precio,coordenadaX,coordenadaY,activo) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [1,3,idCategoria,"Registro vacio","Registro vacio",1,0,0,0,0]
        );
    }

    static getDeactivatedRegisterID(){
        return db.execute(
            'SELECT idInmueble FROM inmueble WHERE activo = 0 ORDER BY idInmueble DESC LIMIT 1'
        );
    }

    static activateInmuebleCasa(name,desc,tipoMovimiento,precio,coordX,coordY,idInmueble){
        return db.execute(
            'UPDATE inmueble SET nombre=?,descripcion=?,idTipoMovimiento=?,precio=?,coordenadaX=?,coordenadaY=?,activo=1 WHERE idInmueble=?',
            [name,desc,tipoMovimiento,precio,coordX,coordY,idInmueble]
        );
    }

}