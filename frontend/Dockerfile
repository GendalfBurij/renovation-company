# Используем официальный Node образ для сборки
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY public/ ./public
COPY src/ ./src
RUN npm run build

# Используем Nginx для сервировки приложения
FROM nginx:alpine
COPY build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


