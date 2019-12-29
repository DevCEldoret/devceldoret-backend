#!/bin/sh
pwd
echo "host=${host}" >> .env
echo "user=${user}" >> .env
echo "type=${type}" >> .env
echo "port=${port}" >> .env
echo "pass=${password}" >> .env
cat .env
ls
