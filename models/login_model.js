// to check whether the user who is trying to login is registered or not

module.exports = function(data, request, response){
    
    var users_data_model = require('../schemas/users_schema.js');
    var bcrypt = require('bcryptjs');
    console.log("in login_model.js");
    console.log(data);
    users_data_model.find().where('email').equals(data.email).where('role').equals(data.role).exec(function(err, output){
       if(err)
       {
       	console.log("error occurred while checking for presence of email"+err);
       	response.send(JSON.stringify({success : false}));
       }         
       else
       {
        if(output.length==0)
        {
          console.log("No such user !");
          response.send(JSON.stringify({success : false}));
        }
        else
        {
          var result = output[0];
          var hashed_password = result.password;
          console.log(hashed_password);
          var temp;
          bcrypt.compare(data.password, hashed_password, function(err, x){
            if(x==true)
            {
              response.cookie('_id', result._id);
              response.cookie('first_name', result.first_name);
              response.cookie('last_name', result.last_name);
              response.cookie('email', result.email);
              response.cookie('role', result.role);
              console.log("successfully set the cookies");
              response.send(JSON.stringify({success : true, role: result.role}));
            }
            else
            {
              console.log("No such user !");
              response.send(JSON.stringify({success : false}));
            }
          });
        }
       }
    });
};