# 1. Compilación de React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Servidor Nginx para entregar el contenido estático
FROM nginx:stable-alpine
# Vite por defecto guarda la compilación en la carpeta /dist
COPY --from=build /app/dist /usr/share/nginx/html/emprende-ia
# Exponemos el puerto 80 (estándar web)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
