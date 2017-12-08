var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var auth = require('./auth.json');
var routes = require('./routes/index')
var connection=mongoose.connect('mongodb://localhost:27017/product');
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(jwt({ secret: auth.secret}).unless({path: [
	'/api/v1/checkuser', 
	'/api/v1/addProduct','/api/v1/updateProduct', '/api/v1/deleteProduct', '/api/v1/getAllProducts', 
	'/api/v1/addCategory', '/api/v1/updateCategory', '/api/v1/getAllCategory', '/api/v1/login', '/api/v1/register', '/api/v1/getAllCategoryWithProducts']}))
app.use('/api', routes);


// app.use(expressjwt({secret : auth.secret}).unless({path : ['/api/v1/checkuser']}))



app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

// Start the server
app.listen(port);
console.log('App Running on port ' + port);