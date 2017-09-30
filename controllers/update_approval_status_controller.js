module.exports = function(app){
    app.post('/update_approval_status', function(request, response){
    var update_approval_status_model = require('../models/update_approval_status_model.js');
    console.log('in update_approval_status_controller.js');
    var cookies = request.cookies;
    var _id = cookies._id;
    if(_id == null || _id =="")
    {
       response.render('../views/home_login');
    }
    else
    {
        var leave_id = request.body.leave_id;
        if(cookies.role=='student')
        response.redirect('/student'); 
        else
        update_approval_status_model(leave_id, request, response);
    }
    });
};