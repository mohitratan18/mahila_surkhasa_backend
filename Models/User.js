const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile_number:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    emergency_number:{
        type:String,
        required:true
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;