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
    ptt(req, res){
        res.render("ptt");
    }
    undomain(req, res){
        res.render("undomain");
    }
}

module.exports = new SitesController;