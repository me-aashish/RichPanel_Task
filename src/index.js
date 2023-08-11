const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const apiRoutes = require('./routes/index');
const {UserRepository} = require('./repository/index');
const Plan = require('./model/plan');
const Subscription = require('./model/subscription')
const authMiddleware = require('./middleware/auth-request-validator');

const setUpAndStartServer = async() =>{
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use('/api', apiRoutes);
    app.set('view engine', 'ejs');
    app.use(cors());

    //stripe code
    const stripe = require("stripe")('sk_test_51NdF4nSIY5cUAtITpQdqiDYMwb6fkBdAS6y0yoI9KrjFernYk6JV4wuLyb8znFz44Yq06YLNepA53raGHW7kQAS000h2yviUzt');

    const calculateOrderAmount = (items) => {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        
        const price = parseInt(items[0].Plan_Price);
        console.log(price);
        return price*100;
      };
      
      try {
        app.post("/create-payment-intent",authMiddleware, async (req, res) => {
          // console.log(req.user)
          const { items } = req.body;
          console.log(items);
          // const desc = {"Plan Name" :items[0].Plan_Name, "Devices" : items[0].Devices}
          const desc = `Plan Name : ${items[0].Plan_Name}, Devices : ${ items[0].Devices}`;
          let devices = "";
          items[0].Devices.forEach((device)=>{
            devices = devices + ` ${device}`
          })
          // Create a PaymentIntent with the order amount and currency
          const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            // amount: 100,
            currency: "inr",
            automatic_payment_methods: {
              enabled: true,
            },
            description :desc
          });
          const amount = calculateOrderAmount(items)/100;
          const subscriptionData = {
            email: req.user.email,
            name:'req.user.name',
            plan_name:items[0].Plan_Name,
            devices:devices,
            price : amount,
            cycle : items[0].Plan_Cycle
          }
          await Subscription.create(subscriptionData);
          res.send({
            clientSecret: paymentIntent.client_secret,
          });
        });
      } catch (error) {
        res.status(500).json({
          message : 'something went wrong',
          success : false,
          data : {},
          err : error
        })
      }
      
    app.listen(PORT, async()=>{
        console.log(`Server started on ${PORT}`);
        await connectDB(MONGO_URI);
        console.log('DB connected');
        
        
    })
}

setUpAndStartServer();