class NewsController{
    //[GET] /
    index(req, res){
        res.render("news");
    }
    //[GET] /news/:slug
    show(req, res){
        res.render("slug");
    }
}

module.exports = new NewsController;