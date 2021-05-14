FROM node:latest
#FROM mysql

#Sets the working directory in Docker instead of copying the local root folder into Docker.
WORKDIR /app

#Copies the package.json file within the local Bug-Tracker folder into the workdir in Docker.
COPY . /app

#runs npm install inside the workdir
RUN npm install

#Optimization - When rebuilding the image npm does not need to be installed again. Copies all folders and subfolders within the local Bug-Tracker folder after npm installs into the workdir in Docker. 
COPY . /app

EXPOSE 3000

#does not execute when the image is created but when a container is created
CMD npm run start