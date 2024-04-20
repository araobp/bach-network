npm uninstall browser-utils
npm uninstall db
rm -rf node_modules/browser-utils
rm -rf node_modules/db
npm install ./browser-utils
npm install ./db
node main.js
