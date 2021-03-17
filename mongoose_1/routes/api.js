const express = require("express");
const router = express.Router();
const employeeRouter = require('./employee/employee.controller');
const companyRouter = require('./company/company.controller');
const extra = require('./extra/extra.controller');
const index = require('./index');


router.use('/employee', employeeRouter);
router.use('/company', companyRouter);
router.use('/extra', extra);
router.get('/', index);


module.exports = router;