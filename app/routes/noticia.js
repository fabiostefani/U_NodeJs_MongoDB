module.exports = function(app) {

    app.get('/noticia', function(req, res){         
        try {
            var connection = app.config.dbConnection();    
            var noticiasModel = app.app.models.noticiasModel;
            noticiasModel.getNoticia(connection, function(error, result){                                
                 res.render("noticias/noticia", {
                     noticia: result
                 });
             } );        
        } catch (error) {
            console.log(error);
         }        
    })
}
