module.exports = function(app){
    app.get('/student', function(request, response){
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
        response.render('../views/student', {first_name: cookies.first_name, last_name: cookies.last_name});
        else
        response.redirect('/teacher'); 
    }
    });
};