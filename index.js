var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// By
// Kanakaraju Gullapudi

// I am using MVC architecture so that the code looks clean and it's not only easy to handle but also 
// easy to debug and make changes !

// checks whether the user who is trying to login is a registered user or not !
require('./controllers/login_controller.js')(app);

// to perform logout !
require('./controllers/logout_controller.js')(app);

// to display login page to the user !
require('./controllers/login_user_controller.js')(app);

// to display registration page to the user !
require('./controllers/register_user_controller.js')(app);

// checks whether the user who is trying to register is already registered or not. If he is not registered, an account 
// will be created !
require('./controllers/registration_controller.js')(app);

// to display the main page to the student after he logs in !
require('./controllers/student_controller.js')(app);

// to display the main page to the teacher after he logs in !
require('./controllers/teacher_controller.js')(app);

// to display a page so that the student can apply for leave !
require('./controllers/apply_leave_controller.js')(app);

// to put the data related to the leave in the database !
require('./controllers/send_leave_request_controller.js')(app);

// to display a page so that the teacher can see all the leaves or the student can see all his leaves !
require('./controllers/get_all_leaves_controller.js')(app);

// to see all his applied leaves by the student
require('./controllers/fetch_my_leaves_controller.js')(app);

// to see all the leaves by the teacher
require('./controllers/fetch_all_leaves_controller.js')(app);

// to update the approval status field in the database when teacher accepts the leave !
require('./controllers/update_approval_status_controller.js')(app);

// to get all the leaves so that the teacher can approve leaves of students !
require('./controllers/fetch_all_leaves_for_approval_controller.js')(app);

// to display a page where all the applied leaves are shown so that the teacher can accept them !
require('./controllers/approve_leaves_controller.js')(app);

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});