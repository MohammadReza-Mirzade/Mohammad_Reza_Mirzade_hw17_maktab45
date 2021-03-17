const express = require("express");
const Router = express.Router();
const {getAllEmployee, getSingleEmployee, createEmployee, updateEmployee, deleteEmployee} = require('./employee.service');


Router.get('/all', getAllEmployee);
Router.get('/:employee', getSingleEmployee);
Router.post('/create', createEmployee);
Router.post("/update/:id", updateEmployee);
Router.get('/delete/:id', deleteEmployee);


module.exports = Router;