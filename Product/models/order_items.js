// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;
// Define our orderitem schema
var OrderItemsSchema = new Schema({
    id : {
        type: Number,
    },
    orderId : {
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