const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stringAssumption = {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
}

const CompanySchema = new Schema({
    name: {
        ...stringAssumption,
        minlength: 2,
        maxlength: 30,
    },
    state:{
        ...stringAssumption,
    },
    city:{
        ...stringAssumption,
    },
    phoneNumber:{
        ...stringAssumption,
        validate(value) {
            if (value.match(/\d/g).length !== value.length){
                throw new Error('');
            } else if (value.length === 10) {
                throw new Error('');
            }
        } ,
    },
    registrationNumber:{
        ...stringAssumption,
        unique: true,
        validate(value) {
            if (value.match(/\d/g).length !== value.length){
                throw new Error('');
            }
        } ,
    },
    registrationDate: {
        type: Date,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', CompanySchema);

