let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our model (TODO)
let Contact = require("../models/contact_list");

// Get Route for the contact list page
router.get("/", (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact/list", {
        title: "ContactList",
        ContactList: contactList,
      });
    }
  });
});

// GET      --> to display Add / CREATE
router.get("/add", (req, res, next) => {
  res.render("contact/add", {title: "Add contact"});
});

// POST     --> to process Add / CREATE
router.post("/add", (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.description,
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // Refresh the Contact List
      res.redirect("/contact-list");
    }
  });
});

// GET      --> to display Edit / UPDATE
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("contact/edit", { title: "Edit Contact", contactToEdit });
    }
  });
});

// POST     --> to process Edit / UPDATE
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.description,
  });
  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

// GET      --> to display Delete operation page / Delete
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

module.exports = router;
