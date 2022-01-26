const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(()=>console.log("You are connected to the MongoDB"))
    .catch(err=>console.log("db connection failed", err))