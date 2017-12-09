var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var productController = require('../controllers/productCtrl');
var categoryController = require('../controllers/categoryCtrl');
var userController = require('../controllers/userCtrl');

//user apis
router.route('/v1/login')
.post(userController.login)

router.route('/v1/register')
.post(userController.registerUser)

//product apis
router.route('/v1/addProduct')
.post(productController.addProduct)

router.route('/v1/updateProduct')
.post(productController.updateProduct)

router.route('/v1/deleteProduct')
.post(productController.deleteProduct)

router.route('/v1/getAllProducts')
.get(productController.getAllProducts)


//category apis
router.route('/v1/addCategory')
.post(categoryController.addCategory)

router.route('/v1/updateCategory')
.post(categoryController.updateCategory)

router.route('/v1/getAllCategory')
.get(categoryController.getAllCategory)

router.route('/v1/getAllCategoryWithProducts')
.get(categoryController.getAllCategoryWithProducts)

//image routes
router.route('/image')
.post(productController.postImage)
.get(productController.getImages);


module.exports = router; // Exporting router
