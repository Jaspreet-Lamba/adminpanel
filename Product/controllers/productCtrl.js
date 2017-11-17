var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var Product = require("../models/product");

exports.addProduct = function(req,res){
    productId = 27;
    
     var product = new Product({ // Making Object of Users schema 
	    product_id : productId,
	    product_name : req.body.productName,
	    product_price : req.body.productPrice,
	    product_image : req.body.productImage,
	    product_splprice : req.body.productSplPrice,
	    stock : req.body.stock,
	    quantity : req.body.quantity,
	    product_shortdesc : req.body.productShortDesc,
	    product_fulldesc : req.body.productFullDesc
    });
     product.save(function (err, response) {

        if(err){
            return res.json({
                 "error" : err
            });
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "product_id": response.product_id,
                "message": "product added"
            }, auth.secret)
            res.json({
                "success": true,
                "message" : "Product Added",
                "token" : token
            })
        }
    })
 }
 exports.getProduct = function (req, res) {

    var product_id = req.body.productid;

    Product.findOne({ productid: product_id }, function (error, response) {
         if(err){
            return res.json({
                "error" : error
            });
        }
        else{
        	if(response != null || response != undefined ){
        	var token = jwt.sign({
                "status": "true",
                "product_id": response.product_id,
                "message": "product Found"
            }, auth.secret)
            res.json({
                "success": true,
                "message" : "Product Found",
                "token" : token,
                "body": response
            })
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "product_id": response,
                "message": "product Not Found"
            }, auth.secret)
            res.json({
                "success": true,
                "message" : "Product Not Found",
                "Token" : token,
                "body": response
            })
        }
    }
    });
}

 exports.getAllProducts = function (req, res) {
    Product.find({}, function (err, response) {
         if(err){
            return res.json({
                "error" : err
            });
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "product_id": response,
                "message": "product Found"
            }, auth.secret)
            res.json({
                "success": true,
                "token" : token,
                "data": response,
                "length" : response.length
            })
        }
    });
}


exports.getProductWithCategoty = function(req, res){
	categoryid : req.body.category_id;
	Product.find({category_id : categoryid}, function(err, response){
		 if(err){
            return res.json({
                "error" : err
            });
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "product_id": response,
                "message": "product Found"
            }, auth.secret)
            res.json({
                "success": true,
                "message" : "Product Found",
                "token" : token,
                "body": response
            })
        }
	})
}



