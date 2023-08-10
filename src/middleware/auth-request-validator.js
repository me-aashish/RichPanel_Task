const UserService = require('../service/user-service');
const { UserRepository } = require('../repository/index')
const userServiceObj = new UserService();
const userRepoObj = new UserRepository();
const store = require("store2");

const authRequestValidator = async(req, res, next) => {
    try {
        // console.log(req.headers);
        const token = req.headers['x-access-token'];
        // const token = store('token');
        // console.log(token)
        if(!token){
            throw { error: "Invalid request. Please signup/signin first" };
        }
        const response = userServiceObj.verifyToken(token);
        // console.log(response);
        if(!response){
            throw {error: "Invalid token"};
        }

        const user = await userRepoObj.get(response.id);

        if(!user){
            throw { error: "Invalid request. Please signup/signin first" };
        }

        req.user = user;
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Something went wrong',
            data : {},
            err : error
        })  
       
    }
    
    next();
}

module.exports = authRequestValidator;
