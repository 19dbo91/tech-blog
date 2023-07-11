
//#region Dependencies
const sql = require('mysql2');
const express = require('express');
const db = require('./config/connection.js')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

//here









sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
