const Company = require('../../models/Company');
const Employee = require('../../models/Employee');

const exe3 = (req, res) => {
    Employee.find({}, {__v: 0}).sort({name: -1}).lean().populate('company', {select: 'name', match: {name: 'Intel'}}).exec((err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        res.send(employee);
    });
};

const exe4 = (req, res) => {
    let date = new Date(Date.now());
    date.setFullYear(date.getFullYear()-1);
    Company.find({registrationDate: {$gt: date}}, (err, companies) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(companies);
    });
};

const exe5 = (req, res) => {
    Employee.find({beManager: true}, {__v: 0}).sort({name: -1}).lean().populate('company', {select: 'name', match: {name: 'Intel'}}).exec((err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        res.send(employee);
    });
};

const exe6 = (req, res) => {
    let date = new Date(Date.now());
    date.setFullYear(date.getFullYear()-20);
    let data1 = date;
    date.setFullYear(date.getFullYear()-10);
    Employee.find({birthday: {$gt: date,$lt: data1}}, {'_id':0}, (err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(employee);
    });
};

const exe7 = (req, res) => {
    Employee.find({beManager: true},  (err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(employee);
    });
};

const exe8 = (req, res) => {
    Employee.find({beManager: true}, {__v: 0}).sort({name: -1}).lean().populate('company', {name: 1}).exec((err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: console.log(err.message)});
        res.send(employee);
    });
};

const exe9 = (req, res) => {
    Company.updateMany({}, {city: "Tehran", state: "Tehran"}, (err, companies) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(companies);
    });
};


module.exports = {
    exe3, exe4, exe5, exe6, exe7, exe8, exe9
};
