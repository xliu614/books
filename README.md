# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Chapter 6 project from Modern React with Redux [2024 Update] 
## Chapter 7 project from Modern React with Redux [2024 Update]

### Notes
#### define states in the lowerest common parent of the components
#### use https://picsum.photos for generation of random pic for books
#### set up json server and use it for db side
- installjson server: npm install json-server@0, the version 1 seems to be very broken, so specify version 0
- in package.json add in "scripts" server set up
- in a seperated terminal, run server by command: npm run server
- so two servers are on: client side npm run start, server side npm run server
- if 3001 port is already occupied then can specify some other port like: json-server -p 3005 --watch db.json