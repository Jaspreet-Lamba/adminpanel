var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var productController = require('../controllers/productCtrl');
var categoryController = require('../controllers/categoryCtrl');

// router.route('/v1/checkuser')
// .post(userController.checkUser)


router.route('/v1/addProduct')
.post(productController.addProduct)

router.route('/v1/getAllProducts')
.get(productController.getAllProducts)

router.route('/v1/addCategory')
.post(categoryController.addCategory)

router.route('/v1/getAllCategory')
.get(categoryController.getAllCategory)

module.exports = router; // Exporting router
