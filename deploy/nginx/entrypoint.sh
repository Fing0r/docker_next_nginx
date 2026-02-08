#!/bin/sh
set -e

echo ">>> Rendering nginx config from template"

# Сначала envsubst для переменных
envsubst '
  $SERVICE_HOST_NAME
  $NEXT_WEB
' \
  < /etc/nginx/template.nginx.conf \
  > /etc/nginx/nginx.conf

echo ">>> Nginx config rendered successfully"
echo ">>> Starting nginx"

exec nginx -g 'daemon off;'
