const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
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


const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;