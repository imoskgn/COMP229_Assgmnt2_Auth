let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our model (TODO)
let Contact = require("../models/contact_list");

module.exports.displayContactList = (req, res, next) => {
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
};

module.exports.displayContactAdd = (req, res, next) => {
  res.render("contact/add", { title: "Add contact" });
};

module.exports.processContactAdd = (req, res, next) => {
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
};

module.exports.displayContactUpdate = (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("contact/edit", { title: "Edit Contact", contactToEdit });
    }
  });
};

module.exports.processContactUpdate = (req, res, next) => {
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
};

module.exports.processContactDelete = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
};
