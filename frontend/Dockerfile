# frontend/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-router-dom
COPY public/ ./public/  
COPY src/ ./src/
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
ENV REACT_APP_ENV=production