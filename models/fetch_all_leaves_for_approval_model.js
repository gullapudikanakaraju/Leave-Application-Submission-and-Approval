// to fetch all leaves whose approval status is false
// i.e. when teacher wants to approve leaves

module.exports = function(request, response){

    var leaves_model = require('../schemas/leave_schema.js');
    console.log("in fetch_all_leaves_for_approval_model.js");
    leaves_model.find().where('approval_status').equals(false).exec(function(err, result){
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