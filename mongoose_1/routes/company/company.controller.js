const express = require("express");
const Router = express.Router();
const {getSingleCompany, getAllCompany, createNewCompany, updateCompany, deleteCompany, companyIndex} = require('./company.service');


Router.get('/', companyIndex);
Router.get('/getManyCompany', getAllCompany);
Router.get('/:id', getSingleCompany);
Router.post('/create', createNewCompany);
Router.post('/update/:id', updateCompany);
Router.get('/delete/:id', deleteCompany);


module.exports = Router;
