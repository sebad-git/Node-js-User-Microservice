const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  port:3306
});