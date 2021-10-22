let mongoose = require("mongoose");

// Create model class
let contactModel = mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String
},
{
    collection:'contact'
});

module.exports = mongoose.model('Contact', contactModel);