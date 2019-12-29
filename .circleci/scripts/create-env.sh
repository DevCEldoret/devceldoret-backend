#!/bin/sh
pwd
echo "host=${host}" >> .env
echo "user=${user}" >> .env
echo "type=${type}" >> .env
echo "port=${port}" >> .env
echo "pass=${pass}" >> .env
cat .env
ls
