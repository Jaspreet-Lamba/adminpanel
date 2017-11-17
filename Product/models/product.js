// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;

// Define our user schema
var ProductSchema = new Schema({
    product_name: {
        type: String
    },
    product_id: {
        type: Number,
        unique : true
    },
    product_price: {
        type: Number
    },
    product_image: {
        type: String
    },
    product_splprice: {
        type: Number
    },
    product_shortdesc:{
        type : String
    },
    product_fulldesc:{
        type :String
    },
    category_id : {
        type: Number
    },
    stock:{
        type : String
    },
    quantity : {
        type: Number
    }

});

module.exports = mongoose.model('Product', ProductSchema);