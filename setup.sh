#!/bin/sh
# This file links the production folder to the github repository
mkdir production
cd production
git init
git remote add origin https://github.com/appsdemo-2/React-JS-Demo-ProductRecall.git
git pull origin master
