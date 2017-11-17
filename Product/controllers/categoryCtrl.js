var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var Category = require("../models/category");

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