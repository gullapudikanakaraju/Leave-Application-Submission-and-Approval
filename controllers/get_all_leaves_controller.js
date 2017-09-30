module.exports = function(app){
    app.get('/student/get_my_leaves', function(request, response){
    console.log('in get_all_leaves_controller.js student');
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
            response.render('../views/get_all_leaves_student',{first_name: cookies.first_name, last_name: cookies.last_name});
        }
        else
        response.redirect('/teacher'); 
    }
    });

    app.get('/teacher/get_all_leaves', function(request, response){
    console.log('in get_all_leaves_controller.js teacher');
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
            response.redirect('/student');
        }
        else
        response.render('../views/get_all_leaves_teacher',{first_name: cookies.first_name, last_name: cookies.last_name});
    }
    });
};