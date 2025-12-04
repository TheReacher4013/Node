// var a=10;
// var b =20;
// console.log(a+b);


const http = require('http');
const app = require ("./app")// import statement

http.createServer(app ).listen(3000);