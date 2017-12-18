// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;
[{"productId":27,"productName":"USB Cable 2.0","productPrice":100,"productSplPrice":10,"productImage":"","productQuantity":1,"productGst":"12"}]
// Define our orderitem schema
var OrderItemsSchema = new Schema({
    id : {
        type: Number,
    },
    order_id : {
        type: Number,
    },
    productId : {
        type: Number
    },
    productName : {
        type: String
    },
    productPrice : {
        type: Number
    },
    productSplPrice : {
        type: Number
    },
    productImage : {
        type: String
    },
    productQuantity: {
        type: Number
    },
    productGst : {
        type: String
    }
});

module.exports = mongoose.model('OrderItems', OrderItemsSchema);