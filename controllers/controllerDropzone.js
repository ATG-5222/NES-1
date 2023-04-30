const { uploadMedia } = require('../helpers/multerMedia');

exports.getDropzonePage = (req,res,next) => {;
    res.render('dropzonepage');
};

exports.uploadMedia = (req,res,next) => {
    console.log("Entrando a la ruta de upload media");
    //var upload = uploadMedia.array('media',1);
    var upload = uploadMedia.array('media', 10);
    upload(req,res,function(err) {
        console.log("Dentro del upload");
        if(err) {
            //console.log(err);
            return res.end("Error uploading file.");
        }
        //var pathDest = req.files[0].destination.slice(1);
        var pathDest = req.files[0].destination.slice(8);
        //var finalPath = path.join(__dirname, '../'+pathDest1);
        const filename = req.files[0].filename;
        console.log("pathDest: ",pathDest);
        console.log("filename: ",filename);
        res.status(200).json({code: 200, msg:"Ok"}); 
        //res.redirect('/');
    })
};