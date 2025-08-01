# Stage 1: Build the Angular app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy built files from previous stage to NGINX HTML folder
COPY --from=builder /app/dist/<your-angular-app-name> /usr/share/nginx/html

# Copy custom NGINX config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
