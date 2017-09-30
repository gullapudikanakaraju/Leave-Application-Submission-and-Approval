module.exports = function(app){
    app.get('/student/apply_for_a_leave', function(request, response){
    console.log('in student_controller.js');
    var cookies = request.cookies;
    var _id = cookies._id;
    if(_id == null || _id =="")
    {
       response.render('../views/home_login');
    }
    else
    {
        if(cookies.role=='student')
        {
            response.render('../views/apply_for_leave');
        }
        else
        response.redirect('/teacher'); 
    }
    });
};