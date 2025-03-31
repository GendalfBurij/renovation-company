# Этап сборки React-приложения
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install react-router-dom
COPY public/ ./public/
COPY src/ ./src/
ENV REACT_APP_ENV=production
RUN npm run build

# Этап запуска с Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Откроем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
