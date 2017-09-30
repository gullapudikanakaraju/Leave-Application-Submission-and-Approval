// to see all his applied leaves and approval statuses by the student

module.exports = function(identity, request, response){

    var leaves_model = require('../schemas/leave_schema.js');
    console.log("in fetch_my_leaves_model.js");
    console.log(identity);
    leaves_model.find().where('requested_by.user_id').equals(identity).exec(function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send(JSON.stringify({success: false}));
    }         
    else
    {
      console.log("successfully found the documents"+result);
      console.log("numbers of leaves are: "+result.length);
      response.send(JSON.stringify({success: true, data: result}));
    }
    });
};