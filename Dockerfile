# Stage 1: Build Angular App
FROM node:18 AS builder

WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json ./

# Clean install (Linux-specific)
RUN npm ci --legacy-peer-deps

# Force esbuild binary rebuild
RUN npm rebuild esbuild

# Copy rest of the project
COPY . .

# Build Angular app
RUN npm run build --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app
COPY --from=builder /app/dist/aptastify/browser /usr/share/nginx/html

# Custom Nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
