const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route')

function route(app){  
    app.use('/news', newsRouter);
    // app.get("/", (req, res) => {
    //     res.render("home");
    // });
    // app.get("/trang-chu", (req, res) => {
    //     res.render("moi");
    // });
    // // app.get("/tin-tuc", (req, res) => {
    // //     res.render("news");
    // // });
    // app.get("/search", (rep, res) => {
    //     res.render("search");
    app.use('/', sitesRouter);
};

module.exports = route;