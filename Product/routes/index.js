var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var productController = require('../controllers/productCtrl');
var categoryController = require('../controllers/categoryCtrl');
var userController = require('../controllers/userCtrl');
var orderController = require('../controllers/orderCtrl');

//user apis
router.route('/v1/login')
.post(userController.login)

router.route('/v1/register')
.post(userController.registerUser)

router.route('/v1/updateUserProfile')
.post(userController.updateUserProfile)

router.route('/v1/addAddress')
.post(userController.addAddress)

router.route('/v1/getAddresses')
.post(userController.getAddresses)


//order apis
router.route('/v1/placeOrder')
.post(orderController.placeOrder)



//product apis
router.route('/v1/addProduct')
.post(productController.addProduct)

router.route('/v1/updateProduct')
.post(productController.updateProduct)

router.route('/v1/deleteProduct')
.post(productController.deleteProduct)

router.route('/v1/getAllProducts')
.get(productController.getAllProducts)

router.route('/v1/getProduct')
.post(productController.getProduct)



//category apis
router.route('/v1/addCategory')
.post(categoryController.addCategory)

router.route('/v1/updateCategory')
.post(categoryController.updateCategory)

router.route('/v1/getAllCategory')
.get(categoryController.getAllCategory)

router.route('/v1/getAllCategoryWithProducts')
.get(categoryController.getAllCategoryWithProducts)

module.exports = router; // Exporting router
