const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
