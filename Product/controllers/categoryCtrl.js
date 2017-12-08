var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var Category = require("../models/category");
var Product = require("../models/product");

exports.addCategory = function(req,res){
    categoryId = 3;
    
    var category = new Category({ 
	    category_id : categoryId,
	    category_name : req.body.categoryName,
	    status : req.body.status
	});
    
    category.save(function (err, response) {
        if(err){
            return res.json({
                 "error" : err
            });
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "category_id": response.category_id,
            }, auth.secret)
            res.json({
                "success": true,
                "token" : token
            })
        }
    })
}

exports.updateCategory = function(req,res){
    
    Category.findOne({
        category_id: req.body.categoryId
    }, function (err, categoryResp) {
        if (err) {
            res.json(err);
        }
        categoryResp.category_id = req.body.categoryId;
        categoryResp.category_name = req.body.categoryName;
        categoryResp.status = req.body.status;
        
        categoryResp.save(function (err, response) {
            if (err) {
                res.json(err);
            }
            else{
                if(response != null || response != undefined ){
                    var token = jwt.sign({
                        "status": "true",
                        "product_id": response.category_id,
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
 
exports.getAllCategory = function (req, res) {
    Category.find({}, function (err, response) {
        if(err){
            return res.json({
                "error" : err
            });
        }
        else{
        	var token = jwt.sign({
                "status": "true",
                "category_id": response,
                "message": "Category Found"
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

exports.getAllCategoryWithProducts = function (req, res) {
    var prod = [], cat = [];
    var prodData = {}, catData = {};
    Category.find({}, function (err, catResp) {
        if(err){
            return res.json({
                "error" : err
            });
        }
        else{
            Product.find({}, function (err, prodResp) {
                for(var j=0;j<catResp.length;j++){
                    catData = {};
                    prod = [];
                    catData.category_id = catResp[j].category_id;
                    catData.category_name = catResp[j].category_name;
                    catData.status = catResp[j].status;
                    for(var i=0;i<prodResp.length;i++) {
                        if(catResp[j].category_name == prodResp[i].product_category) {
                            prodData = {};
                            prodData.product_id = prodResp[i].product_id;
                            prodData.product_name = prodResp[i].product_name;
                            prodData.category = prodResp[i].product_category;
                            prodData.product_price = prodResp[i].product_price;
                            prodData.product_splprice = prodResp[i].product_splprice;
                            prodData.stock = prodResp[i].stock;
                            prodData.quantity = prodResp[i].quantity;
                            prodData.product_shortdesc = prodResp[i].product_shortdesc;
                            prodData.product_fulldesc = prodResp[i].product_fulldesc;
                            prodData.product_image = prodResp[i].product_image;
                            prod.push(prodData);      
                        }
                    }
                    catData.products = prod;
                    cat.push(catData);
                }
                res.json({
                    "data" : cat
                });
            });
            // var token = jwt.sign({
            //     "status": "true",
            //     "category_id": response,
            //     "message": "Category Found"
            // }, auth.secret)
            // res.json({
            //     "success": true,
            //     "token" : token,
            //     "data": response,
            //     "length" : response.length
            // })
        }
    });
}