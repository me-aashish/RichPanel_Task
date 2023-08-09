const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/database');
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const apiRoutes = require('./routes/index');
const {UserRepository} = require('./repository/index');

const setUpANdStartServer = async() =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use('/api', apiRoutes);
    
    app.listen(PORT, async()=>{
        console.log(`Server started on ${PORT}`);
        await connectDB(MONGO_URI);
        console.log('DB connected');

        // const userRepoObj = new UserRepository();

        // const user = await userRepoObj.create({
        //         email : 'aashish@gmail.com',
        //         password : '12345',
        //         name : 'Aashish'
        // })
    })
}

setUpANdStartServer();