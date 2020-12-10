const mysql = require("mysql");

// Connection properties

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

connection.connect();

module.exports = connection;