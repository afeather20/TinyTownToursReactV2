# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Set the working directory to /api
WORKDIR /api

# copy package.json into the container at /api
ADD api/package*.json /api/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
ADD . /api/

# Make port 80 available to the world outside this container
EXPOSE 9000

# Run the app when the container launches
CMD ["npm", "start"]


FROM mhart/alpine-node:11 AS builder
WORKDIR /app
ADD  client/package*.json /app/
EXPOSE 3000
RUN yarn run start



