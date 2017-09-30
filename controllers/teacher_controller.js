module.exports = function(app){
    app.get('/teacher', function(request, response){
    console.log('in teacher_controller.js');
    var cookies = request.cookies;
    var _id = cookies._id;
    if(_id == null || _id =="")
    {
       response.render('../views/home_login');
    }
    else
    {
        if(cookies.role=='teacher')
        response.render('../views/teacher', {first_name: cookies.first_name, last_name: cookies.last_name}); 
        else
        response.redirect('/student');
    }
    });
};