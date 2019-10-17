// Server Node.js 

var express = require('express');//abilita express
var http = require('http');//abilita http
var path = require('path');//abilita path
var port = process.env.PORT || 3000;
var cors = require('cors'); //abilita cors
var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
app.use(cors({ origin: 'https://bookymgunimi.netsons.org/xample.com' }));

// imposta la route
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);