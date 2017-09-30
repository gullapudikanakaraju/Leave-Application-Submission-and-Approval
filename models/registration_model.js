// to create an account if the user is not already registered

module.exports = function(data, request, response)
{
   var users_data_model = require('../schemas/users_schema.js');
   var bcrypt = require('bcryptjs');
	console.log("in registration_model.js");
   console.log(data);
   users_data_model.find().where('email').equals(data.email).exec(function(err, output){
      if(err)
      {
         console.log("error occurred while checking for the existence of email in users database"+error);
         response.send();
      }
      else
      {
         if(output.length == 0)
         {
            bcrypt.hash(request.body.password,10,function(er, hash){
               if(er)
               {
                  console.log('error occurred while generating the hash'+er);
                  response.send();
               }
               else
               {
                  data.password= hash;
                  data._id= new Date().getTime();
                  console.log(data);
                  users_data_model.create(data, function(error, result){
                     if(error)
                     {
                        console.log("error occurred while inserting the document in the database "+error);
                        response.send(JSON.stringify({success: false}));
                     }
                     else
                     {
                        response.cookie('first_name', result.first_name);
                        response.cookie('last_name', result.last_name);
                        response.cookie('email',result.email);
                        response.cookie('_id', result._id);
                        response.cookie('role', result.role);
                        console.log("resulted due to insertion in database is  "+result);
                        response.send(JSON.stringify({success: true, role: data.role}));
                     }
                  });
               }
            });
         }
         else
         {
            console.log("This email is already present in users database"+output);
            response.send(JSON.stringify({success: false, role: output[0].role}));
         }
      }
   });
}