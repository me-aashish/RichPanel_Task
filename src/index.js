const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const setUpANdStartServer = () =>{
    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
    })
}

setUpANdStartServer();