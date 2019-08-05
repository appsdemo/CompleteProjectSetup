#!/bin/sh

# To upgrade, replace App.js, App.test.js
# Add Components/ProductRecall.js
# Add snapshots from v2
#

# Upgrade App.js
echo "Upgrading App.js file"
to=./production/src/App.js
from=./v2/src/App.js
cp -f $from $to

# Upgrade App.test.js
echo "Upgrading App.test.js file"
to=./production/src/App.test.js
from=./v2/src/App.test.js
cp -f $from $to

# Add ProductRecall.js
echo "Adding Product Recall file"
touch ./production/src/Components/ProductRecall.js
to=./production/src/Components/ProductRecall.js
from=./v2/src/Components/ProductRecall.js
cp -f $from $to

# Add snapshots
mkdir ./production/src/__snapshots__
touch ./production/src/__snapshots__/App.test.js.snap
to=./production/src/__snapshots__/App.test.js.snap
from=./v2/src/__snapshots__/App.test.js.snap
cp -f $from $to

# Push the code to github
cd production
git status
git add .
git commit -m "Added Product Recall"
git push --set-upstream origin master


echo "Upgraded to v2"
