# frontend/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-router-dom
COPY public/ ./public/  
COPY src/ ./src/
CMD ["npm", "start"]
ENV REACT_APP_ENV=production