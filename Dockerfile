# The image is built on top of one that has node preinstalled
FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Copy all files into the container
COPY . .
# Install dependencies
RUN npm install
RUN npm run build
# Open appropriate port 
EXPOSE 3000
# Start the application
ENV NODE_ENV production
CMD [ "node", "./dist/server.js" ]
