FROM node:latest

#Sets the working directory in Docker instead of copying the local root folder into Docker.
WORKDIR /app

# 1.) Copies the package.json file within the local Bug-Tracker folder and 2.) copies it into the workdir in Docker.
COPY /package.json /app

#runs npm install inside the workdir
RUN npm install

#Optimization - 1.)Copies all folders and subfolders within the local Bug-Tracker folder after npm installs and 2.) copies them into the workdir in Docker. When rebuilding the image npm does not need to be installed again. 
COPY . /app

EXPOSE 8080

#does not execute when the image is created but when a container is created
CMD ["node", "/app/server.js"]