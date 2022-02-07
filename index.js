const express = require ('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

app.set('view engine', 'ejs');

const routes = require('./routes');
routes(app);

server.listen(process.env.PORT || 3000, () => console.log(`Listening on *.:${process.env.PORT || 3000}...`));