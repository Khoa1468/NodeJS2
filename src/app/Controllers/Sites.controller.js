class SitesController{
    //[GET] /
    home(req, res){
        res.render("home");
    }
    trang_chu(req, res){
        res.render("moi");
    }
    search(req, res){
        res.render("search");
    }
}

module.exports = new SitesController;