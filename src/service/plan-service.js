const { PlanRepository } = require('../repository/index');
const planRepoObj = new PlanRepository();
class PlanService{
    async get(){
        try {
            const plan = await planRepoObj.get();
            return plan;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = PlanService;