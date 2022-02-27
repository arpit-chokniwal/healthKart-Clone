const mongoose = require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://healthkart:healthkart@cluster0.g73qa.mongodb.net/HealthKart")
}
//mongodb+srv://healthkart:healthkart@cluster0.g73qa.mongodb.net/HealthKart
//mongodb+srv://abarik:abarik_123@cluster0.tlmpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority