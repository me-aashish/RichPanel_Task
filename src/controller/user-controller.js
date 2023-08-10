const UserService = require('../service/user-service');
const userServiceObj = new UserService();


const signup = async(req,res) => {
    console.log(req.body.email);
    try {
        
        const response = await userServiceObj.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        res.status(201).json({
            message : 'successfully fetched plan chart',
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

const signin = async(req,res) => {
    try {
        const response = await userServiceObj.signin(req.body);
        // req.headers['x-access-token'] = response;
        // console.log(req.headers);
        res.status(201).json({
            message : 'successfully logged in',
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
        console.log(error)
    }
}

module.exports = {
    signup,
    signin
}