module.exports = function(app){
    var registration_model = require('../models/registration_model.js');
    var bcrypt = require('bcryptjs');
    app.post('/registration', function(request, response){
        var data = {};
        data.first_name = request.body.first_name;
        data.last_name = request.body.last_name;
        data.email = request.body.email;
        data.role = request.body.role;
        // data.password = request.body.password;
        console.log(data);

        registration_model(data,request,response);


    });
};