#!/bin/bash

PEM=~/Desktop/code/repair-company.pem
SERVER=ubuntu@13.51.200.191
REMOTE_BUILD_PATH=/home/ubuntu/renovation-company/frontend/build
TMP_PATH=/home/ubuntu/tmp_build

echo "📦 Сборка frontend..."
cd ./frontend || exit 1
npm run build || exit 1
cd ..

echo "🚚 Копирование build на сервер..."
scp -i $PEM -r ./frontend/build $SERVER:/home/ubuntu/tmp_build || exit 1

echo "🛠 Обновление сборки на сервере..."
ssh -i $PEM $SERVER << EOF
  sudo rm -rf $REMOTE_BUILD_PATH
  sudo mv $TMP_PATH $REMOTE_BUILD_PATH
  sudo chown -R www-data:www-data $REMOTE_BUILD_PATH
  sudo systemctl reload nginx
EOF

echo "✅ Деплой завершён! Проверь сайт: https://urbanovo.xyz"

