const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {type : String},
    username : {type : String },
    password : {type : String},
    image: {type: String},
    isAdmin:{type:Boolean, default: false},
    btcWallet: {type:String},
    ethWallet: {type:String},
    },{timestamps : true})
 const User = mongoose.model("User", userSchema);
module.exports = User;