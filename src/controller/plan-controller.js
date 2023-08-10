const PlanService = require('../service/plan-service');
const planServiceObj = new PlanService();

const get = async(req,res)=>{
    try {
        const response = await planServiceObj.get();
        res.status(201).json({
            message : 'successfully fetched plan',
            success : true,
            data : response,
            err : {}
        })
        
    } catch (error) {
        res.status(500).json({
            message : 'something went wrong',
            success : false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    get
}