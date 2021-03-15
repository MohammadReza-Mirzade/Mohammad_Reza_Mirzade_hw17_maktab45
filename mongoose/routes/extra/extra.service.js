const Company = require('../../models/Company');
const Employee = require('../../models/Employee');


const exe2 = (req, res) => {
    let date = new Date(Date.now());
    date.setFullYear(date.getFullYear()-1);
    Company.find({registrationDate: {$gt: date}}, (err, companies) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(companies);
    });
};

const exe3 = (req, res) => {
    let date = new Date(Date.now());
    date.setFullYear(date.getFullYear()-20);
    let data1 = date;
    date.setFullYear(date.getFullYear()-10);
    Employee.find({birthday: {$not: {$gt: date,$lt: data1}}}, {'_id':0}, (err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(employee);
    });
};

const exe4 = (req, res) => {
    Employee.find({beBoss: true},  (err, employee) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(employee);
    });
};

const exe5 = (req, res) => {
    Company.updateMany({}, {city: "Tehran", state: "Tehran"}, (err, companies) => {
        if (err) return res.status(500).json({msg: "Server Error :)", err: err.message});
        res.send(companies);
    });
};


module.exports = {
    exe2, exe3, exe4, exe5
};