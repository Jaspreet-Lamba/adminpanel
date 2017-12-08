// Load required packages
var mongoose = require('mongoose');
  var  Schema = mongoose.Schema;

// Define our user schema
var UserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    id: {
        type: Number
    }

});

module.exports = mongoose.model('User', UserSchema);