module.exports = function(aplication) {
    aplication.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    })

    aplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        console.log(noticia);

        var connection = aplication.config.dbConnection();
        var noticiasModel = aplication.app.models.noticiasModel();

        noticiasModel.salvarNoticia(noticia, connection, function(error, result) {
            res.redirect("/noticias");
        });
    })
}
