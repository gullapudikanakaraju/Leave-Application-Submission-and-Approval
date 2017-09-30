module.exports = function(app){
    app.get('/fetch_my_leaves', function(request, response){
    var fetch_my_leaves_model = require('../models/fetch_my_leaves_model.js');
    console.log('in fetch_my_leaves_controller.js');
    var cookies = request.cookies;
    var _id = cookies._id;
    if(_id == null || _id =="")
    {
       response.render('../views/home_login');
    }
    else
    {
        if(cookies.role=='student')
        fetch_my_leaves_model(_id, request, response);
        else
        response.redirect('/teacher'); 
    }
    });
};