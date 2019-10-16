import express, { static } from 'express';//abilita express
import { join } from 'path';//abilita path
var port = process.env.PORT || 3000;
var app = express();

// Imposta la struttura delle cartelle
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(static(__dirname + '/public'));
// imposta la route
app.get('*', (req, res,next) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});
  
  var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);
