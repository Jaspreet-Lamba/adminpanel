var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var auth = require('../auth.json');
var Order = require("../models/order");
var OrderItems = require("../models/order_items");

exports.placeOrder = function(req,res){
    Order.find({}, function (err, resp) {
        if(err){
            return res.json({
                "error" : err
            });
        }
        else{
            var order = new Order({ 
                id : resp[resp.length-1].id + 1,
                date : req.body.date,
                status : req.body.status,
                user_id : req.body.user_id,
                user_name : req.body.user_name,
                email : req.body.email,
                group : req.body.group,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                mobile : req.body.mobile,
                address_email : req.body.address_email,
                address : req.body.address,
                city : req.body.city,
                state : req.body.state,
                country : req.body.country,
                pincode : req.body.pincode,
                payment_type : req.body.payment_type,
                shipping : req.body.shipping,
                sub_total : req.body.sub_total,
                gst : req.body.gst,
                wallet : req.body.wallet,
                discount : req.body.discount,
                total : req.body.total,
                order_items : req.body.cartDetails.length
            });
            order.save(function (err, response) {
                if(err){
                    return res.json({
                         "error" : err,
                         "success" : "false",
                         "message": "Error while saving order, please try again...."
                    });
                }
                else{
                    //OrderItems.find({}, function (err, oiResp) {
                        for(var i=0; i<req.body.cartDetails.length-1;i++) {
                            var orderItems = new OrderItems({ 
                                id : 1, //oiResp[oiResp.lenght-1].id + 1
                                orderId : response.id,
                                productId : req.body.cartDetails[i].productId,
                                productName : req.body.cartDetails[i].productName,
                                productPrice : req.body.cartDetails[i].productPrice,
                                productSplPrice : req.body.cartDetails[i].productSplPrice,
                                productImage : req.body.cartDetails[i].productImage,
                                productQuantity : req.body.cartDetails[i].productQuantity,
                                productGst : req.body.cartDetails[i].productGst
                            });
                            orderItems.save(function (err, oresp) {
                                if(i==req.body.cartDetails.length-1) {
                                    var token = jwt.sign({
                                        "status": "true",
                                        "id": response.id,
                                        "message": "order added"
                                    }, auth.secret)
                                    res.json({
                                        "success": "true",
                                        "message" : "Order Added",
                                        "token" : token,
                                        "data" : response
                                    })
                                }
                            });
                        }
                   // });
                }
            })
        }
    });
}





