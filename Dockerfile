# Use an official Node.js runtime as a base image
FROM node:latest

# Create a directory for the app
WORKDIR /usr/src/app

# Copy the application files into the container
COPY package.json .
COPY hello.js .

# Install app dependencies
RUN npm install

# Expose the port that the app will run on
EXPOSE 8080

# Define the command to run your application
CMD ["node", "hello.js"]

