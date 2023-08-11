const stripe = require("stripe")('sk_test_51NdF4nSIY5cUAtITpQdqiDYMwb6fkBdAS6y0yoI9KrjFernYk6JV4wuLyb8znFz44Yq06YLNepA53raGHW7kQAS000h2yviUzt');

const stripeCont = async(req,res) => {
    const calculateOrderAmount = (items) => {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        return 1400;
    };
      
    app.post("/create-payment-intent", async (req, res) => {
        const { items } = req.body;
      
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount: calculateOrderAmount(items),
          currency: "inr",
          automatic_payment_methods: {
            enabled: true,
          },
        });
      
        res.send({
          clientSecret: paymentIntent.client_secret,
        });
    })    
}

module.exports = {
    stripeCont
}