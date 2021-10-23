let express = require('express');
let router = express.Router();

let indexControllers = require('../controllers/index')

/* GET home page. */
router.get('/', indexControllers.displayHomePage);
router.get('/home', indexControllers.displayHomePage);

/* GET About. */
router.get('/about', indexControllers.displayAboutPage);

/* GET Products */
router.get('/projects', indexControllers.displayProjectsPage);

/* GET Services */
router.get('/services', indexControllers.displayServicesPage);

/* GET Contact Us */
router.get('/contact', indexControllers.displayContactPage);

// GET      --> to display Login page
router.get("/login", indexControllers.displayLoginPage);

// POST     --> to process Login page
router.post("/login", indexControllers.processLoginPage);

// GET      --> to display Login page
router.get("/register", indexControllers.displayRegisterPage);

// POST     --> to process Add / CREATE
router.post("/register", indexControllers.processRegisterPage);

// POST     --> to process Add / CREATE
router.get("/logout", indexControllers.processLogout);

module.exports = router;
