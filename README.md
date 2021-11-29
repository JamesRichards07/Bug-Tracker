# Bug-Tracker 

## To Launch
1. Clone this repo. 
2. Install Docker (if not already installed on your machine). https://docs.docker.com/get-docker/
3. Navigate to the cloned repo in  your terminal and run "docker compose up"

## Overview
Internal communication is paramount for a business, and this program strives to provide a usable tool to track bugs, issues or tasks which can then be assigned to designated team members to fix or complete. 

This Restful SQL API was built out of my aspiration to continually challenge myself to write code and programs which are beneficial in real world application. While creating this project I deepened my understanding in API's, Typescript, Express, HTML/CSS while simultaneously picking up a few new tools such as: 
    - Docker
    - SQL
    - PostgreSQL
    - TypeORM
    - React
    - Tailwind

### Formating
Most requests are made in JSON except when creating a new bug/task which uses form-data.

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

# Known issues
1. Authentication is buried in the header when it should be buried in the JWT.







