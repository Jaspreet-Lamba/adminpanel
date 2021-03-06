// Load required packages
var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

// Define our user schema
var CategorySchema = new Schema({
    category_name: {
        type: String
    },
    category_id: {
        type: Number,
        unique : true
    },
    status: {
        type: String
    },
    category_gst: {
        type: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);