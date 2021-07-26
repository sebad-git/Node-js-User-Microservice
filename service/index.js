const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const connection = require('./mongodb.connection');

//Database
connection.connect();

//Config
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/',require('./src/routes/user.routes'));
//app.use('/admin',require('./routes/admin.routes'));

//Server Status
server.on('error',(err) =>{ console.error("Server error: "+err); });

server.listen(app.get("port"),() =>{ 
    console.log("Server started on port: "+app.get("port"));
});