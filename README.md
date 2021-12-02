# Bug-Tracker 

## To Launch
1. Clone this repo.
2. Install Docker (if not already installed on your machine). https://docs.docker.com/get-docker/
3. Navigate to the cloned repo in your terminal and run "docker compose up".

## Overview
Internal communication is paramount for a business, and this program strives to provide a usable tool to track bugs, issues or tasks which can then be assigned to designated team members to fix or complete. 

This Restful SQL API was built out of my aspiration to continually challenge myself to write code and programs which are beneficial in real world application. While creating this project I deepened my understanding in API's, Typescript, Express, HTML/CSS while simultaneously picking up a few new tools such as: \n
    - Docker \n
    - SQL \n
    - PostgreSQL \n
    - TypeORM \n
    - React \n
    - Tailwind \n

### Formating
Most requests are made in JSON except when creating a new bug/task which uses form-data.

### Authorization
developer - limited access. \n
    Requests include: \n
        Get - users, users.id, bugs, and bug.id information \n
        Post - new bugs \n
        Patch - bugs they have submitted so long as a processor has not been assigned.
        Patch - bugs they are assigned to as a processor.

supervisor - semi-limited access \n
    Requests include: \n
        All developer requests \n
        Patch - any bug information

manager - complete access \n
    Requests include: \n
        All supervisor requests \n
        Get - user login information \n
        Patch - any user or user login information \n
        Delete - any bug, user, or user login information

## Existing Info
When first launched there is one user with the title of "manager" already present. Use this user to promote a new user to "manager" allowing them access to make any changes to users or bugs. \n

Default User: \n
Username: \n
test@gmail.com \n
\n
Password: \n
123456

# Known issues
1. Authentication is buried in the header when it should be buried in the JWT.







