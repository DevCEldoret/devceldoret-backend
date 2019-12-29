#!/bin/sh
pwd
cd 
echo "host=${host}" >> .env
echo "user=${user}" >> .env
echo "type=${type}" >> .env
echo "port=${port}" >> .env
cat .env
ls
