FROM node:16.13.0 as react-build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
RUN npm run build

FROM nginx
COPY --from=react-build /app/build /usr/share/nginx/html   