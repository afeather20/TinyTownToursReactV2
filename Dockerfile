# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
# Set the working directory to /client
WORKDIR /client
# copy package.json into the container at /client
COPY ./client/package*.json ./client/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY ./client /client/
# Make port 3000 available to the world outside this container
EXPOSE 3000
RUN yarn build
# Run the app when the container launches
CMD ["yarn", "start"]


# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
# Set the working directory to /api
WORKDIR /api
# copy package.json into the container at /api
COPY ./api/package*.json /api/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY ./api /api/
# Make port 80 available to the world outside this container
EXPOSE 9000
# Run the app when the container launches
CMD ["npm", "start"]


