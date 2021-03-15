const express = require("express");
const Router = express.Router();
const {getSingleCompany, getAllCompany, createNewCompany, updateCompany, deleteCompany} = require('./company.service');


Router.get('/', getAllCompany);
Router.get('/:id', getSingleCompany);
Router.post('/create', createNewCompany);
Router.post('/update/:id', updateCompany);
Router.get('/delete/:id', deleteCompany);


module.exports = Router;