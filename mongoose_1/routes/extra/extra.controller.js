const express = require("express");
const Router = express.Router();
const {exe3, exe4, exe5, exe6, exe7, exe8, exe9} = require('./extra.service');


Router.get('/3', exe3);
Router.get('/4', exe4);
Router.get('/5', exe5);
Router.get('/6', exe6);
Router.get('/7', exe7);
Router.get('/8', exe8);
Router.get('/9', exe9);


module.exports = Router;
