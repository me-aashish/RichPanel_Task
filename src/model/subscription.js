const mongoose = require('mongoose');

const subSchema = new Mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    plan_name : {
        type: String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    devices : {
        type : String,
        required: true
    },
    cycle :{
        type: String,
        required:true
    }
}, { timestamps : true })

const Subscription = mongoose.model('Subscription', subSchema);

module.exports = Subscription