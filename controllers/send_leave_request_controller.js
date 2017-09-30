module.exports = function(app){
	app.post('/send_leave_request', function(request, response){
		var send_leave_request_model= require("../models/send_leave_request_model.js");
		console.log('in send_leave_request_controller.js');
		var cookies = request.cookies;
		var _id = cookies._id;
		if(_id == null || _id =="")
		{
       		 response.render('../views/home_login');
		}
		else
		{
			if(cookies.role=='student'){
		     var data = {};
		     data=request.body;
			 data._id= new Date().getTime();
			 data.requested_by={};
			 data.requested_by.first_name = cookies.first_name;
			 data.requested_by.last_name = cookies.last_name;
			 data.requested_by.email = cookies.email;
			 data.requested_by.user_id = cookies._id;
			 data.requested_at= new Date();
	   		 send_leave_request_model(data, request, response);
			}
			else
			{
				response.redirect('/teacher');
			}
		}
    });
}