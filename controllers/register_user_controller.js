module.exports = function(app){
    app.get('/register_user', function(request, response) {

        var cook = request.cookies;
        console.log(cook);
        console.log("in register_user_controller.js");
        if(cook._id==undefined)
        {
            response.render('../views/home_register');
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