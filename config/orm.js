// Require connection.js for MySQL connection
var connection = require("../config/connection.js");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
};

orm = {
    // selectAll method
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // insertOne method
    insertOne: function(table, column, burgerInput, cb) {
        var queryString = "INSERT INTO " + table + " (" + column.toString() + ") " + "VALUES (" + createQmarks(burgerInput.length) + ") ";

        console.log(queryString);

        connection.query(queryString, burgerInput, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // updateOne method
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;

        console.log(queryString);

        connection.query(queryString, burgerInput, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // deleteOne method to manage additions
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;