module.exports = function(app){
    app.get('/teacher/approve_leaves', function(request, response){
    console.log('in approve_leaves_controller.js');
    var cookies = request.cookies;
    var _id = cookies._id;
    if(_id == null || _id =="")
    {
       response.render('../views/home_login');
    }
    else
    {
        if(cookies.role=='student')
        response.redirect('/student');
        else
        response.render('../views/approve_leaves', {first_name: cookies.first_name, last_name: cookies.last_name});
    }
    });
};