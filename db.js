/** Database for lunchly */

const pg = require("pg");
const password = require("./password");
const db = new pg.Client("postgresql:///lunchly");
db.password = password;
db.connect();

module.exports = db;
