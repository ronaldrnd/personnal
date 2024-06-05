# Use an official node image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Clearing cache
RUN npm cache clean --force

# Install dependencies
RUN npm install --no-optional --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Run the application
CMD ["npm", "run", "preview"]