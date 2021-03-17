const Company = require('../../models/Company');
const Employee = require('../../models/Employee');

const companyIndex = (req, res) => {
    res.render('company');
};

const getAllCompany = (req, res) => {
    if (req.query.start && req.query.end) {
        Company.find({registrationDate: {$gt: req.query.start ,$lt: req.query.end}}, (err, companies) => {
            if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
            res.json(companies);
        });
    }else {
        Company.find({}, (err, companies) => {
            if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
            res.json(companies);
        });
    }
};

const getSingleCompany = (req, res) => {
    Company.findById(req.params.id, (err, company) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        Employee.find({company: req.params.id}, (err, employees)=>{
            if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});

            let d = new Date(company.registrationDate), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            res.render('companyPage', {company, employees, registrationDate: [year, month, day].join('-')});
        });
    });
};

const createNewCompany = (req, res) => {
    if (!req.body.name && !req.body.state && !req.body.city && !req.body.phoneNumber && !req.body.registrationDate) {
        return res.status(400).render('message', {message: "Bad Request :)"})
    };

    Company.findOne({registrationNumber: req.body.registrationNumber.trim()}, (err, company) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        if (company) return res.status(406).render('message', {message: "Exist Company Name :("})

        const newCompany = new Company({
            name: req.body.name,
            state: req.body.state,
            city: req.body.city,
            phoneNumber: req.body.phoneNumber,
            registrationNumber: req.body.registrationNumber,
            registrationDate: req.body.registrationDate,
        });

        newCompany.save((err, company) => {
            if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
            res.render('message', {message: 'The operation was successful.'});
        });
    });
};

const updateCompany = (req, res) => {
    if (!req.body.name && !req.body.state && !req.body.city && !req.body.phoneNumber && !req.body.registrationDate) {
        return res.status(400).render('message', {message: "Bad Request :)"})
    };
    Company.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, company) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        res.render('message', {message: 'The operation was successful.'});
    });
};

const deleteCompany = (req, res) => {
    Company.findOne({_id: req.params.id}, (err, company) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        if (!company) return res.status(404).render('message', {message: "Not Found!"})
        Company.deleteOne((err, company) => {
            if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
            Employee.deleteMany({company: company._id}, err => {
                if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
                res.render('message', {message: 'The operation was successful.'});
            });
        });
    });
};

module.exports = {
    getAllCompany,
    getSingleCompany,
    createNewCompany,
    updateCompany,
    deleteCompany,
    companyIndex
};
