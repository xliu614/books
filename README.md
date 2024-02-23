# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Chapter 6 project from Modern React with Redux [2024 Update] 
## Chapter 7 project from Modern React with Redux [2024 Update] about useEffect
## Chapter 8 project from Modern React with Redux [2024 Update] about useContext

### Notes
#### define states in the lowerest common parent of the components
#### use https://picsum.photos for generation of random pic for books
#### set up json server and use it for db side
- installjson server: npm install json-server@0, the version 1 seems to be very broken, so specify version 0
- in package.json add in "scripts" server set up
- in a seperated terminal, run server by command: npm run server
- so two servers are on: client side npm run start, server side npm run server
- if 3001 port is already occupied then can specify some other port like: json-server -p 3005 --watch db.json

#### Notes on useEffect
- the arrow function's always got called and rendored the component immediately
- whether or not the function's called later for the second or third time depends on the second argument
- if the second argument is [] then the arrow function's never called again
- if the second argument is empty, then the arrow function's called repeately 
- if the second argument is [counter], then the arrow function's called again if counter variable is changed prior to the next render      
