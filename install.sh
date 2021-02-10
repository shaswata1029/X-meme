#! /bin/sh

sudo apt-get update

sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

sudo apt-get install -y mongodb
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
sudo systemctl restart mongodb

sudo apt-get install -y nodejs
sudo apt-get install -y npm

sudo apt install -y curl

