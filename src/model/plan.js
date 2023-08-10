const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    planName : [
        {
            type : String,
            required : true
        }
    ],
    monthlyPrice : [
        {
            type : Number,
            required : true
        }
    ],
    yearlyPrice: [
        {
            type : Number,
            required : true
        }
    ],
    videoQuality : [
        {
            type : String,
            required : true
        }
    ],
    resolution : [
        {
            type : String,
            required : true
        }
    ],
    watchableOn : [
        [
            {
                type : String,
                required : true
            }
        ]
    ]
})

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;