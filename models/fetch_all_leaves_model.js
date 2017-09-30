// to fetch all the leaves so that the teacher can see them

module.exports = function(request, response){

    var leaves_model = require('../schemas/leave_schema.js');
    console.log("in fetch_all_leaves_model.js");
    leaves_model.find().exec(function(err, result){
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