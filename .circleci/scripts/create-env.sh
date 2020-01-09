#!/bin/sh
echo "HOST=${HOST}" >> .env
echo "DB_TYPE=${DB_TYPE}" >> .env
echo "DB=${DB}" >> .env
echo "TEST_DB=${TEST_DB}" >> .env
echo "DB_USER=${DB_USER}" >> .env
echo "DB_PASSWORD=${DB_PASSWORD}" >> .env
echo "DB_PORT=${DB_PORT}" >> .env
echo "SERVER_PORT=${SERVER_PORT}" >> .env
echo "NODE_ENV=${NODE_ENV}" >> .env
