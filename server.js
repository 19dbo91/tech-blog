
//#region Dependencies
const sql = require('mysql2');
const express = require('express');
const db = require('./config/connection.js')
const routes = require('./controllers');
const exphbs = require('express-handlebars');
//#endregion

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



//here



app.use(routes);





sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
