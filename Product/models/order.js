// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;

// Define our user schema
var OrderSchema = new Schema({
    id : {
        type: Number,
        unique : true
    },
    order_items : {
        type: Number,
    },
    date : {
        type: String
    },
    status : {
        type: String
    },
    user_id : {
        type: String
    },
    user_name : {
        type: String
    },
    email : {
        type: String
    },
    group: {
        type: String
    },
    firstName : {
        type: String
    },
    lastName: {
        type: String
    },
    mobile : {
        type: String
    },
    address_email: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: String
    },
    payment_type : {
        type: String
    },
    shipping : {
        type: String
    },
    sub_total : {
        type: String
    },
    gst : {
        type: String
    },
    wallet : {
        type: String
    },
    discount : {
        type: String
    },
    total : {
        type: String
    }
});

module.exports = mongoose.model('Orders', OrderSchema);