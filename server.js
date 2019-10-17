var express = require('express'); //abilita express
var http = require('http'); //abilita http
var path = require('path') ;//abilita path
var cors = require('cors'); //abilita cors
var port = process.env.PORT || 3000;
var app = express();

// Imposta la struttura delle cartelle
app.use(cors());
app.use('/', express.static(__dirname + '/public'));
// imposta la route
app.get('*', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
  
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);
