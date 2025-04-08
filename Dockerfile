# Use the official Node.js image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./
COPY bun.lockb ./ 

# Install dependencies
RUN npm install
# OR if using bun
# RUN npm install -g bun && bun install

# Copy rest of the app
COPY . .

# Expose the dev server port
EXPOSE 8080

# Run the dev server
CMD ["npm", "run", "dev"]
