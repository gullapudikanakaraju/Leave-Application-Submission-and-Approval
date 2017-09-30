module.exports = function(app){
    app.get('/fetch_all_leaves', function(request, response){
    var fetch_all_leaves_model = require('../models/fetch_all_leaves_model.js');
    console.log('in fetch_all_leaves_controller.js');
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
        fetch_all_leaves_model(request, response);
    }
    });
};