// Server Node.js 

const express = require('express');//abilita express
const path = require('path');//abilita path
const port = process.env.PORT || 8080;
const app = express();

// Imposta la struttura delle cartelle
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
app.use(express.static(__dirname + '/public'));
// imposta la route
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
  
  const server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);
