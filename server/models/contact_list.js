let mongoose = require("mongoose");

// Create model class
let contactModel = mongoose.Schema({
    name: String,
    phone:String,
    email:String
},
{
    collection:'contact'
});

module.exports = mongoose.model('Contact', contactModel);