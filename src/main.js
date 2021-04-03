const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const route = require("./routes/index.route");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
// Use \\ for Windows, / for Mac
console.log(`PATH: ${path.join(__dirname, "resources\\views")}`);

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
