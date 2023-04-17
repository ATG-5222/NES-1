const Inmueble = require('../models/modelInmueble');
const InmuebleFoto = require('../models/modelInmuebleFoto');
const Foto = require('../models/modelFoto');

exports.getSearchpage = async (req,res,next) => {
    //Obtener la cantidad total de inmuebles
    const totalInmuebles = await Inmueble.numResultsSearchPage();
    //Cantidad de resultados por pagina
    const resultsPerPage = 2;
    //Establecer la cantidad de resultados por pagina y de paginas
    const numOfResults = totalInmuebles[0][0].total;
    const numOfPages = Math.ceil(numOfResults/resultsPerPage);
    //Solicitar la cantidad de resultados por pagina
    const page = req.query.page ? Number(req.query.page) : 1;
    if(page>numOfPages){
        res.redirect('/?page='+encodeURIComponent(numOfPages));
    } else if(page<1) {
        res.redirect('/?page='+encodeURIComponent('1'));
    }
    //Determinar los limites
    const startingLimit = (page-1)*resultsPerPage;
    //Construir la lista de inmuebles desde la db
    const inmuebles = await Inmueble.limitSearchPage(startingLimit,resultsPerPage);
    for (let i = 0; i < inmuebles[0].length; i++) {
        const imgId = await InmuebleFoto.fetchIdImagenInmueble(inmuebles[0][i].idInmueble);
        const imgSrc = await Foto.fetchImagenInmueble(imgId[0][0].idFoto);
        inmuebles[0][i].img = imgSrc[0][0].archivo;
    }
    //Obtener la información necesaria de la lista
    let iterator = (page-5) < 1 ? 1 : page-5;
    const endingLink = (iterator+9) <= numOfPages ? (iterator+9) : page + (numOfPages-page);
    if(endingLink<(page+4)){
        iterator -= (page+4)-numOfPages;
    }
    //Renderizar los resultados
    console.log("-----------");
    console.log("Pagina",page);
    console.log("Iterador",iterator);
    console.log("endingLink",endingLink);
    console.log("Numero de paginas",numOfPages);
    console.log("-----------");
    res.render('searchpage', {
        inmuebles: inmuebles[0],
        page: page,
        iterator: iterator,
        endingLink: endingLink,
        numOfPages: numOfPages
    });
};