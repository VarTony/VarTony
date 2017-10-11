const express = require('express');
const app = express();

const port = process.env.PORT || 8888;

 app.use(express.static('public'));


let loadPath = "/public/index.html";
app.set('view engine', 'html');

 app.get('/', (req, res) => {
   res.sendFile( __dirname + loadPath );
 });

 app.get('/MyCode', (req, res) => {
   res.sendFile( __dirname + "/public/MyCode.html" );
 });

 app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/public/404.html');
 });

// app.listen(8080);
app.listen(8080, () => console.log( `Server running on port: ${port}`));
module.exports = app;
