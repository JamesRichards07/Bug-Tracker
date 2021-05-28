# Bug-Tracker

Rough Draft (02/28/2021):

Features are ranked essential, semi-essential, and nice-to-have to give priority when building the program.

Essential Features to Include - Database, API, Basic UI, create new ticket, description of ticket, and complete ticket.

Semi-Essential Feature to Include - Priority on tickets, references(links, screen shots, etc.) for the ticket, what dept/team/who the tickets are assigned to,                                           creation date/time, information overview of all tickets is sortable, different levels of permissions(dept head, team lead,                                           developer)

Nice-to-have - Search on all pages, elasped time on tickets, UI customization.

When running the api container use docker run --publish 8080:8080 <file name>

# How to run Bug-Tracker
Build api image: 
    -navigate to the /api folder
    -docker build -t <image name> .

Start Docker-compose: docker-compose up --build

Stop Docker-compose: docker-compose down

Grab container list: docker ps -a
Stop container: docker stop <container id>

Grab image list: docker images
Remove image: docker rmi <image id>

# Written in Typescript
Installed locally using: npm install --save-dev-typescript
Created tsconfig.json file: tsc --init
Compile into javascript using Command+Shift+B
Installed express using <npm install -D @types/exxpress>

# Access mysql container
docker exec -it <container id> bash
psql -h localhost -p 5432 -U postgres -W
<Enter password>
it should show "postgres"

# List databases inside postgres
use \l or \list

# Access databases inside postgres
use \c <database name> or \connect <databse name>
<enter password>

# List tables inside a postgres database
\dt

# Use mysql manual (make sure the version is correct).
https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html