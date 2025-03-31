# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-router-dom
COPY public/ ./public/
COPY src/ ./src/
ENV REACT_APP_ENV=production
RUN npm run build

# Этап запуска
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
