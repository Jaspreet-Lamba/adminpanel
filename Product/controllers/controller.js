// Get the Schemas We need to Enter the Data in their respective keys
var sha1 = require('sha1');
var ret = require('./return');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var User = require("../models/users");


exports.postUser = function(req,res){
    email = req.body.email; 
    password = req.body.password;
    role = req.body.role;
    id = req.body.id;

     var user = new User({ // Making Object of Users schema 
        email: email,
        password: password,
        role: role,
        id: id,
    });
     user.save(function (err, response) {

        if(err){
            return res.json({
                "request" : req, 
                "response" : res, 
                "error" : err
            });
        }
        else{
            res.json({
                "success": true,
                "body": response
            })
        }
    })
 }







 exports.checkUser = function(req,res){
    email = Buffer.from(req.body.email, 'base64');
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
        else if(response === undefined || !response){
            return res.json({
                "status" : "false",
                "message": "user not found"

            })
        }
        else{
            var token = jwt.sign({
                "status": "true",
                "role": response.role,
                "meassage": "logged in"
            }, auth.secret)
            return res.json({
                "status": "true",
                "user_id" : response.id,
                "role": response.role,
                "meassage": "logged in",
                "Token" : token

            })
        }
    });

}




