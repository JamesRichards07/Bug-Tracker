# Bug-Tracker 



## Overview
Internal communication is paramount for a business, and this program strives to provide a usable tool to track bugs, issues or tasks which can then be assigned to designated team members to fix or complete. 

This Restful SQL API was built out of my aspiration to continually challenge myself to write code and programs which are beneficial in real world application. While creating this project I deepened my understanding in API's, Typescript, and Express while simultaneously picking up a few new tools such as: 
    - Docker
    - SQL
    - PostgreSQL
    - TypeORM

## Only the back-end of this project has been posted. Please see below on how to use this project until the front end is completed.

### Getting Started
1. Add a .env file to access the postgres database and creation of a JWT:
    db_pw = db-password-goes-here
    JWT_KEY = private-key-goes-here
2. Start up docker using "docker compose up"
3. http://localhost:3000 used to access site.
4. Use Postman or other Restful API test programs
5. On start there is one user with "manager" access:
    email: test@gmail.com
    password: 123456

### Formating
Most requests can be made in either JSON or form-data. The exception to this is new bugs created with an attached image will need to use form-data and have the "bugImage" key set to "file".

The below headers will need to be set for most requests:
    email: users email goes here
    authorization: "Bearer JWT-token-goes-here"

### Authorization
developer - limited access. 
    Requests include:
        Get - users, users.id, bugs, and bug.id information
        Post - new bugs
        Patch - bugs they have submitted so long as a processor has not been assigned.
        Patch - bugs they are assigned to as a processor.

supervisor - semi-limited access
    Requests include:
        All developer requests
        Patch - any bug information

manager - complete access
    Requests include:
        All supervisor requests
        Get - user login information
        Patch - any user or user login information
        Delete - any bug, user, or user login information

### User Sign-Up
Create a new user with a POST request to "localhost:3000/users/signup"

Enter the following in a JSON format:
    1. firstName - user's first name
    2. lastName - user's last name
    3. positon - developer (default)
    4. team - team the user is a part of
    5. email - user's email
    6. password - user's password

### User Login
User login using "localhost:3000/users/login"

Enter the following in a JSON format:
    1. email
    2. password

### Serach for User or Bug by id
Search using "localhost:3000/users/user.id" or "localhost:3000/bugs/bug.id"

### Update User or Bug
Update information using "localhost:3000/users/user.id" or "localhost:3000/bugs/bug.id"

Enter the following in a JSON format:
    1. field-name-being-updated: new-value

### Delete User
Delete user and user login information using "localhost:3000/users/user.id-to-be-deleted"

Enter the following in a JSON format:
    1. email: user.email-to-be-deleted

### New Bug
Create a new bug with a POST request to "localhost:3000/bugs"

Enter the following in a JSON format:
    1. description - What the bug is or what needs to be done 
    2. application - Source of program where the bug exits
    3. bugImage (nullable) - Image/screen shot (jpeg or png) to compliment description. Limited to 5mb. 
    4. submitter - user.id who submitted the bug
    5. processor (nullable) - user.id who is working on the bug (assigned by a supervisor or manager)

### Delete Bug
Delete bug and any images attached using "localhost:3000/bugs/bug.id"

# Known issues
1. Patch - After user is verfied no restrictions exists when editing the fields.
5. Patch - Needs error handling when user.id or bug.id is not provided.
8. Deleting Users - Will delete user login even if user.id doesn't match anything.
9. Check authorization does not confirm JWT against header email information. Meaning as long as a valid JWT token is generated 
    another manager or supervisor email could be used in the header to alter sensistive information. 

