#!/bin/sh
echo "host=${HOST}" >> .env
echo "type=${DB_TYPE}" >> .env
echo "pass=${DB}" >> .env
echo "pass=${TEST_DB}" >> .env
echo "user=${DB_USER}" >> .env
echo "pass=${DB_PASSWORD}" >> .env
echo "port=${DB_PORT}" >> .env
echo "pass=${SERVER_PORT}" >> .env
echo "pass=${NODE_ENV}" >> .env
