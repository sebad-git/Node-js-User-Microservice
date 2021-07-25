const mysqlDatabase = {}

const connection = require('../database/mysql.connection');

mysqlDatabase.query = (sql) => {
    try {
        connection.connect(function(err) {
              if (err) { throw err; }
              console.log("Connected!");
              connection.query(sql, function (err, result) {
              if (err) { throw err; }
              return result;
            });
          });
    }catch (error) { console.error(error); throw error; }
}

module.exports = mysqlDatabase;