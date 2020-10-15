git reset --hard
git pull origin master
npm stop main.js
npm install -m
node createDB.js
npm start main.js
