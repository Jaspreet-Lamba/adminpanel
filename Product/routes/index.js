var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var productController = require('../controllers/productCtrl'); //Making Object of Controllers

// router.route('/v1/checkuser')
// .post(userController.checkUser)


router.route('/v1/addProduct')
.post(productController.addProduct)

router.route('/v1/getAllProducts')
.get(productController.getAllProducts)

module.exports = router; // Exporting router
