#!/bin/sh
<<<<<<< HEAD
echo "host=${HOST}" >> .env
echo "type=${DB_TYPE}" >> .env
echo "pass=${DB}" >> .env
echo "pass=${TEST_DB}" >> .env
echo "user=${DB_USER}" >> .env
echo "pass=${DB_PASSWORD}" >> .env
echo "port=${DB_PORT}" >> .env
echo "pass=${SERVER_PORT}" >> .env
echo "pass=${NODE_ENV}" >> .env
=======
echo "HOST=${HOST}" >> .env
echo "DB_TYPE=${DB_TYPE}" >> .env
echo "DB=${DB}" >> .env
echo "TEST_DB=${TEST_DB}" >> .env
echo "DB_USER=${DB_USER}" >> .env
echo "DB_PASSWORD=${DB_PASSWORD}" >> .env
echo "DB_PORT=${DB_PORT}" >> .env
echo "SERVER_PORT=${SERVER_PORT}" >> .env
echo "NODE_ENV=${NODE_ENV}" >> .env
>>>>>>> e09d540f317df183d82f54a073bac882e4bc154e
