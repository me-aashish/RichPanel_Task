const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/database');
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const apiRoutes = require('./routes/index');
const {UserRepository} = require('./repository/index');
const Plan = require('./model/plan');
const authMiddleware = require('./middleware/auth-request-validator');

const setUpAndStartServer = async() =>{
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use('/api', apiRoutes);
    app.set('view engine', 'ejs')
   
    app.listen(PORT, async()=>{
        console.log(`Server started on ${PORT}`);
        await connectDB(MONGO_URI);
        console.log('DB connected');
        
        const planData = await Plan.find({}, {'_id' : 0, '__v' : 0});
        // console.log(planData[0]);
        app.get('/v1/plan',(req,res)=>{
            // console.log(req.headers);
            res.render('../views/plan.ejs',{
                plan : planData,
            })
        })
    })
}

setUpAndStartServer();