// a schema for users

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://kanakaraju:8790686045@ds159024.mlab.com:59024/internship');
var users_schema = new Schema({
	_id :{
        type : Number,
        required : true,
        unique : true,
        trim : true
	},
    first_name :{
    	type: String,
    	required: true,
    	trim : true
    },
    last_name :{
        type: String,
        required: true,
        trim : true
    },
    email :{
    	type: String,
    	required: true,
    	unique: true,
    	trim : true
    },
    role :{
        type: String,
        required: true,
        trim : true
    },
    password :{
    	type: String,
    	required: true,
    	trim : true
    }
}); 

console.log('in users_schema.js');
con.on('error',function(error){
	console.log("error occurred while connecting to the database "+error);
});

con.once('open',function(){
	console.log("connected to the database successfully !");
});

var users_model = con.model('user', users_schema);
module.exports = users_model;