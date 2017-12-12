var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var User = require("../models/users");
var Address = require("../models/address");


exports.registerUser = function(req,res){
    User.find({}, function (err, resp) {
        if(err){
            return res.json({
                "error" : err
            });
        } else {
            User.findOne({
                email: req.body.email
            }, function (err, userResp) {
                if (err) {
                    res.json(err);
                }
                if(userResp != null && userResp.email == req.body.email) {
                    res.json({
                        "response" : userResp, 
                        "success" : "false",
                        "message" : "User with this email id is already registered."
                    });
                } else {
                    var user = new User({  
                        email: req.body.email,
                        password: req.body.password,
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        mobileNumber: req.body.mobile,
                        id: resp[resp.length-1].id + 1,
                    });
                    user.save(function (err, response) {
                        if(err){
                            return res.json({
                                "request" : req, 
                                "response" : res, 
                                "message" : "Oops something went wrong. Please try again!"
                            });
                        }
                        else{
                            res.json({
                                "success": "true",
                                "data": response
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.login = function(req,res){
    email = req.body.email;//Buffer.from(req.body.email, 'base64');
    password = req.body.password;
    User.findOne({
        email: email,
        password: password
    }, function(err, response){
        if(err){
            return res.json({
                "status" : "false",
            })
        }
        else if(response == null){
            return res.json({
                "status" : "false",
                "message": "Invalid Email/Password."
            })
        }
        else{
            var token = jwt.sign({
                "status": "true",
                "message": response._id
            }, auth.secret)
            return res.json({
                "status": "true",
                "data" : response,
                "token" : token
            })
        }
    });
}

exports.updateUserProfile = function(req,res){
    User.findOne({
        id: req.body.id
    }, function (err, userResp) {
        if (err) {
            res.json(err);
        }
        userResp.email = req.body.email;
        userResp.password = req.body.password;
        userResp.firstName = req.body.firstname;
        userResp.lastName = req.body.lastname;
        userResp.mobileNumber = req.body.mobile;
        userResp.id = req.body.id;
        
        userResp.save(function (err, response) {
            if(err){
                return res.json({
                    "success" : "false", 
                    "response" : res, 
                    "message" : "Oops something went wrong. Please try again!"
                });
            } else{
                res.json({
                    "success": "true",
                    "data": response
                })
            }
        })
    });
}

exports.addAddress = function(req,res){
    Address.find({}, function (err, addressResp) {
        if (err) {
            res.json(err);
        }
        var address = new Address({  
            id: addressResp ? addressResp[addressResp.length-1].id + 1 : 1,
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
        });
        
        address.save(function (err, response) {
            if(err){
                return res.json({
                    "success" : "false", 
                    "response" : res, 
                    "message" : "Oops something went wrong. Please try again!"
                });
            } else{
                res.json({
                    "success": "true",
                    "data": response
                })
            }
        })
    });
}

exports.getAddresses = function (req, res) {
    Address.find({ userId: req.body.userId }, function (err, response) {
         if(err){
            return res.json({
                "error" : err
            });
        }
        else{
            if(response != null || response != undefined ){
                var token = jwt.sign({
                    "status": "true",
                    "product_id": response.userId,
                    "message": "product Found"
                }, auth.secret)
                res.json({
                    "success": "true",
                    "token" : token,
                    "data": response,
                    "length":response.length
                })
            } else{
                var token = jwt.sign({
                    "status": "false",
                    "user_id": response,
                    "message": "No Address Found"
                }, auth.secret)
                res.json({
                    "success": "false",
                    "Token" : token,
                    "data": response,
                })
            }
        }
    });
}




