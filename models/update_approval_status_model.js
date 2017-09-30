// to update approval_status and approval_at fields in the database

module.exports = function(identity, request, response){

    var leaves_model = require('../schemas/leave_schema.js');
    console.log("in update_approval_status_model.js");
    console.log(identity);
    leaves_model.update({_id : identity}, {$set: {approval_status : true, approval_at: new Date()}}, function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send(JSON.stringify({success: false}));
    }         
    else
    {
      response.send(JSON.stringify({success: true}));
    }
  }
    );
};