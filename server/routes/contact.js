let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our model (TODO)
let Contact = require('../models/contact_list')

// Get Route for the contact list page
router.get('/', (req,res,next)=> {
    Contact.find((err, contactList)=>{
        if(err){
            return console.error(err)
        }
        else{
            res.render('contact',{title:'ContactList', ContactList: contactList})
        }
    })
})

module.exports = router;