// Checking how process.env defaults work
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log('Environment:', NODE_ENV);
console.log('Port:', PORT);
