var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var Product = require("../models/product");
var Image = require('../models/image');
var base64Img = require('base64-img');
var fs = require('fs');

//image code starts

var path = "";

exports.postImage = function (req, res) {
    var image = new Image({
        name: req.body.name,
       path:"/images/"+req.body.name
    });
    var imageDecode = Buffer.from(req.body.base64textString, 'base64');
    fs.writeFile(path+image.name, imageDecode, function(err) {}); 
    image.save(function (error, response) {
        if (error) {
            res.json({
                "success": false,
                "error": error
            })
           
        }
        else {
            res.json({
                "success": true,
                "body": response
            })
          
        }
    });
}
exports.getImages = function (req, res) {
    Image.find({}, function (err, response) {
        
       
        if (err) {
            res.json({
                "success": false,
                "error": err
            })
        }
        for( var i = 0 ; i < response.length; i++){
            response[i].path = "http://localhost:2000" + response[i].path
        }
       res.json(response);
    })
}

//image code ends

exports.addProduct = function(req,res){
    Product.find({}, function (err, resp) {
        if(err){
            return res.json({
                "error" : err
            });
        }
        else{
            var product = new Product({ 
                product_id : resp[resp.length-1].product_id + 1,
                product_name : req.body.productName,
                product_category : req.body.productCategory,
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
    });
}

exports.updateProduct = function(req,res){
    
    Product.findOne({
        product_id: req.body.productId
    }, function (err, productResp) {
        if (err) {
            res.json(err);
        }
        productResp.product_id = req.body.productId;
        productResp.product_name = req.body.productName;
        productResp.product_category = req.body.productCategory;
        productResp.product_price = req.body.productPrice;
        productResp.product_image = req.body.productImage;
        productResp.product_splprice = req.body.productSplPrice;
        productResp.stock = req.body.stock;
        productResp.quantity = req.body.quantity;
        productResp.product_shortdesc = req.body.productShortDesc;
        productResp.product_fulldesc = req.body.productFullDesc;

        productResp.save(function (err, response) {
            if (err) {
                res.json(err);
            }
            else{
                if(response != null || response != undefined ){
                    var token = jwt.sign({
                        "status": "true",
                        "product_id": response.product_id,
                    }, auth.secret)
                    res.json({
                        "success": true
                    })
                }
                else{
                    var token = jwt.sign({
                        "product_id": response
                    }, auth.secret)
                    res.json({
                        "success": false,
                    })
                }
            }
        })
    })
 }

 exports.deleteProduct = function(req,res){
    
    Product.remove({
        product_id: req.body.productId
    }, function (error, resp) {
        if (error) {
            res.json(error);
        }
        else{
            if(resp != null || resp != undefined ){
                Product.find({}, function (err, response) {
                    if(err){
                        return res.json({
                            "error" : err
                        });
                    }
                    else{
                        var token = jwt.sign({
                            "status": "true",
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
            else{
                var token = jwt.sign({
                    "product_id": response
                }, auth.secret)
                res.json({
                    "success": false,
                })
            }
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



