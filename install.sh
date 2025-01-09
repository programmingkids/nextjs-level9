#! /bin/bash

echo "==== START ===="

psql -U postgres -c "DROP DATABASE IF EXISTS nextjs_level9"
psql -U postgres -c "CREATE DATABASE nextjs_level9 WITH ENCODING='UTF8' LC_COLLATE='ja_JP.utf8' LC_CTYPE='ja_JP.utf8' TEMPLATE=template0"

echo "==== nextjs_level9 ===="
echo "==== DATABASE CREATED ===="

cp ./.env_sample ./.env
echo "==== ENV CREATED ===="

npx prisma migrate dev --name init
echo "==== DATABASE MIGRATED ===="

npx prisma db seed
echo "==== DATABASE INITIALIZED ===="

echo "==== COMPLETED ===="
