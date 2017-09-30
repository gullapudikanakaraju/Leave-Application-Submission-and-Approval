// a schema for the leaves

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://kanakaraju:8790686045@ds159024.mlab.com:59024/internship');
var leave_schema = new Schema({
	_id :{
        type : Number,
        required : true,
        unique : true,
        trim : true
	},
    start_date :{
        type: String,
        required: true,
        trim: true
    },
    end_date :{
        type: String,
        required: true,
        trim: true
    },
    leave_type :{
        type: String,
        required: true,
        trim: true
    },
    reason :{
        type: String,
        required: true,
        trim: true
    },
    requested_by :{
        first_name :{
            type: String,
            required: true,
            trim: true
        },
        last_name :{
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        user_id :{
            type: Number,
            required: true,
            trim: true
        }
    },
    requested_at :{
        type: String,
        required: true,
        trim: true
    },
    approval_status :{
        type: Boolean,
        trim: true,
        default: false
    },
    approval_at :{
        type: String,
        trim: true,
        default:''
    }
}); 

console.log('in leave_schema.js');
con.on('error',function(error){
	console.log("error occurred while connecting to the database "+error);
});

con.once('open',function(){
	console.log("connected to the database successfully !");
});

var users_model = con.model('leave', leave_schema);
module.exports = users_model;