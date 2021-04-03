class NewsController{
    index(req, res){
        res.render("news");
    }
    show(req, res){
        res.render("slug");
    }
}

module.exports = new NewsController;