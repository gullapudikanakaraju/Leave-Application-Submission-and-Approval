module.exports = function(app){
    app.post('/login', function(request, response){
    	var login_model = require('../models/login_model.js');
        var cook = request.cookies;
        console.log(cook);
        console.log("in login_controller.js");
        if(cook._id==undefined)
        {
        	var data={};
        	data.email= request.body.email;
    		data.password = request.body.password;
            data.role = request.body.role;
    		console.log(data);
    		login_model(data, request, response);
        }
        else
        {
            response.send();
        }
    });
};