// to create a leave in the database

module.exports = function(data, request, response){

    var leaves_model = require('../schemas/leave_schema.js');
    console.log("in send_leave_request_model.js");
    console.log(data);
	leaves_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true, role: request.cookies.role}));
		}
	});
};