# Leave-Application-Submission-and-Approval
A web application for a leave application submission and approval in a student-teacher scenario.
The application would involve 2 sets of users ( Student & Teacher) with different authorizations. All API end points consider user role for authorization checks:

APIs used for Student are : 
     (GET) Ability to see all previously created leave request & their approval status, 
     (POST) Create a new leave request ( Start Date , End Date , Leave Type , Reason) 
      
APIs used for Teacher are : 
     (PUT) Ability to approve leave requests created by a student, 
     (GET) See all leave requests in the system ( for all students)
