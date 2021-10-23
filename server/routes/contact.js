let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contact");

// Helper function for guarding purpuses
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

// Get Route for the contact list page
router.get("/", requireAuth, contactController.displayContactList);

// GET      --> to display Add / CREATE
router.get("/add", requireAuth, contactController.displayContactAdd);

// POST     --> to process Add / CREATE
router.post("/add", requireAuth, contactController.processContactAdd);

// GET      --> to display Edit / UPDATE
router.get("/edit/:id", requireAuth, contactController.displayContactUpdate);

// POST     --> to process Edit / UPDATE
router.post("/edit/:id", requireAuth, contactController.processContactUpdate);

// GET      --> to display Delete operation page / Delete
router.get("/delete/:id", requireAuth, contactController.processContactDelete);

module.exports = router;
