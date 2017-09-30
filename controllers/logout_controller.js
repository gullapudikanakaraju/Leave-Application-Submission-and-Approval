module.exports = function(app){
	app.get('/logout',function(request, response){
        var cook = request.cookies;
    	console.log(cook);
    	console.log("in logout_controller.js");
    	if(cook._id==undefined)
    	{
        	response.render('../views/home_login')
    	}
    	else
    	{
    		response.clearCookie("email");
    		response.clearCookie("_id");
    		response.clearCookie("first_name");
            response.clearCookie("last_name");    
            response.clearCookie("role");
    		console.log("cleared all cookies");
    		response.redirect('/login_user');
    	}
	});
};