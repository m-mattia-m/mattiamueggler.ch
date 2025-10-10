# -------------------- BUILD STAGE --------------------
FROM node:20-bullseye as builder
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

# Generate static output
RUN npm run generate

# -------------------- RUNTIME STAGE --------------------
FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
