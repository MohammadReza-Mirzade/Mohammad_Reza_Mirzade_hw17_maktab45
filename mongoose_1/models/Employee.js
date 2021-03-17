const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stringAssumption = {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
}

const EmployeeSchema = new Schema({
    lastName: {
        ...stringAssumption,
        minlength: 2,
        maxlength: 255
    },
    firstName:{
        ...stringAssumption,
        minlength: 2,
        maxlength: 255,
    },
    nationalNumber:{
        ...stringAssumption,
        unique: true,
        validate(value) {
            if (value.match(/\d/g).length !== value.length){
                throw new Error('');
            }
        } ,
    },
    beManager:{
        type: Boolean,
        required: true
    },
    gender:{
        type: Boolean,
        required: true
    },
    birthday:{
        required: true,
        type: Date
    },
    company: {
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Company",
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
