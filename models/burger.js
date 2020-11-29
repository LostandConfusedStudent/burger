var orm = require("../config/orm.js");

burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(column, burgerInput, cb) {
        orm.selectAll("burgers", column, burgerInput, function(res) {
            cb(res);
        });
    },
    
    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;