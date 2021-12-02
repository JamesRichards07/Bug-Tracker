# Bug-Tracker 

## Overview
Internal communication is paramount for a business, and this program strives to provide a usable tool to track bugs, issues or tasks which can then be assigned to designated team members to fix or complete. 

This Restful SQL API was built out of my aspiration to continually challenge myself to write code and programs which are beneficial in real world application. While creating this project I deepened my understanding in API's, Typescript, Express, HTML/CSS while simultaneously picking up a few new tools such as: \n
    - Docker \n
    - SQL \n
    - PostgreSQL \n
    - TypeORM \n
    - React \n
    - Tailwind \n

## To Launch and Begin Using
1. Clone this repo.
2. Install Docker (if not already installed on your machine). https://docs.docker.com/get-docker/
3. Navigate to the cloned repo in your terminal and run "docker compose up".
4. Visable in your favorite browser on http://localhost:8000
5. Click "Sign Up" to create a new user.
6. Login with newly created user.

### Formating
Most requests are made in JSON except when creating a new bug/task which uses form-data.

### Authorization
developer - limited access.
    Requests include:
        Get - users, users.id, bugs, and bug.id information
        Post - new bugs
        Patch
            - bugs they have submitted so long as a processor has not been assigned.
            - bugs they are assigned to as a processor.

supervisor - semi-limited access
    Requests include:
        All developer requests
        Patch - any bug information

manager (default) - complete access
    Requests include:
        All supervisor requests
        Get - user login information
        Patch - any user or user login information
        Delete - any bug, user, or user login information

# Known issues
1. Authentication is buried in the header when it should be buried in the JWT.







