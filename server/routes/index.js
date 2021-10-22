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

module.exports = router;
