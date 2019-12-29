#!/bin/sh
pwd
echo "host=${host}" >> .env
echo "user=${user}" >> .env
echo "type=${type}" >> .env
echo "port=${port}" >> .env
cat .env
ls
