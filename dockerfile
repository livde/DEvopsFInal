# Usa la imagen base de Nginx
FROM nginx:latest

# Copia el archivo index.html al directorio raíz de Nginx
COPY index.html /usr/share/nginx/html/index.html
