module.exports = function(app){
    app.get('/login_user', function(request, response) {

        var cook = request.cookies;
        console.log(cook);
        console.log("in login_user_controller.js");
        if(cook._id==undefined)
        {
            response.render('../views/home_login');
        }
        else
        {    
            if(cook.role== 'student')
                response.redirect('/student');

            if(cook.role== 'teacher')
                response.redirect('/teacher');

        }
    });
};