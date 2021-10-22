let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let contactController = require('../controllers/contact')


// Connect to our model (TODO)
let Contact = require("../models/contact_list");

// Get Route for the contact list page
router.get("/", contactController.displayContactList);

// GET      --> to display Add / CREATE
router.get("/add", contactController.displayContactAdd);

// POST     --> to process Add / CREATE
router.post("/add", contactController.processContactAdd);

// GET      --> to display Edit / UPDATE
router.get("/edit/:id", contactController.displayContactUpdate);

// POST     --> to process Edit / UPDATE
router.post("/edit/:id", contactController.processContactUpdate);

// GET      --> to display Delete operation page / Delete
router.get("/delete/:id", contactController.processContactDelete);

module.exports = router;
