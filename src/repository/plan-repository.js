const Plan = require('../model/plan');

class PlanRepository{
    
    async get(){
        try {
            const plan = await Plan.find({}, {'_id' : 0, '__v' : 0});
            return plan;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = PlanRepository;