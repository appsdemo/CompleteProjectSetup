#!/bin/sh

# To upgrade, replace App.js, App.test.js
# Add Components/ProductRecall.js
# Add snapshots from v2
#

# Downgrade App.js
echo "Downgrading App.js file"
to=./production/src/App.js
from=./v1/src/App.js
cp -f $from $to

# Downgrade App.test.js
echo "Downgrading App.test.js file"
to=./production/src/App.test.js
from=./v1/src/App.test.js
cp -f $from $to

# Delete ProductRecall.js
echo "Deleting Product Recall file"
sudo rm ./production/src/Components/ProductRecall.js

# Delete snapshots
sudo rm -rf ./production/src/__snapshots__
touch ./production/src/__snapshots__/App.test.js.snap

# Push the code to github
cd production
git status
git add .
git commit -m "Downgraded to v1"
git push --set-upstream origin master

echo "Downgraded to v1"
