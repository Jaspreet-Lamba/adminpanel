var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var User = require("../models/users");


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
    })
 }




