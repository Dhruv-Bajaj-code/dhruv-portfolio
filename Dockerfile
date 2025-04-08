# ----------- Stage 1: Build the app -----------
FROM node:20 AS builder

WORKDIR /app

# Copy only necessary files for installation first for better caching
COPY package*.json ./
COPY bun.lockb ./   # keep this only if you're actually using bun
RUN npm install      # or `bun install` if you're actually using bun

# Copy the rest of your app
COPY . .

# Build the Vite app
RUN npm run build

# ----------- Stage 2: Serve with Nginx -----------
FROM nginx:alpine

# Copy the built files to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
