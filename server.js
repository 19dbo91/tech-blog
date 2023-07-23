//#region Importing dependencies...
const sql = require('mysql2');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
//#endregion

const app = express();
const PORT = process.env.PORT || 3001;

//#region Initializing handlebars...
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//#endregion

//#region Setting up routes...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
//#endregion

//#region Connecting...
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
//#endregion