echo "installing libraries..."
yarn add express lodash @types/node
npm install -g typescript 
echo "libraries successfully installed! running application..."
tsc app.ts
