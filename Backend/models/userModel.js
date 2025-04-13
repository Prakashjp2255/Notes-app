const mongoose = require('mongoose');

const signup = new mongoose.Schema( {
    name : {
        type:String,
        required :true
    },
    email : {
        type:String,
        required :true
    },
    password : {
        type:String,
        required :true
    },
    // createdOn: {
    //     type:Date,
    //     default : new Date().getTime() 
    // },
},

{
    timestamps:true
});
const userDetails = mongoose.model('Signin', signup);

module.exports = userDetails;