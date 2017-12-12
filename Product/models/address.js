// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;

// Define our address schema
var AddressSchema = new Schema({
    id: {
        type: Number
    },
    userId: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
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
        type: Number
    }
});

module.exports = mongoose.model('Address', AddressSchema);