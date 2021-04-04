class SitesController{
    //[GET] /
    home(req, res){
        res.render("home");
    }
    //[GET] /trang-chu
    trang_chu(req, res){
        res.render("moi");
    }
    //[GET] /search
    search(req, res){
        res.render("search");
    }
    //[GET]/cup-dien
    cup_dien(req, res){
        res.render("cup-dien");
    }
}

module.exports = new SitesController;