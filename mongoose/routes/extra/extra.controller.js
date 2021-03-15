const express = require("express");
const Router = express.Router();
const {exe2, exe3, exe4, exe5} = require('./extra.service');


Router.get('/2', exe2);
Router.get('/3', exe3);
Router.get('/4', exe4);
Router.get('/5', exe5);


module.exports = Router;