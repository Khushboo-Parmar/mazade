const mysql = require('mysql');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "erpgo"
});
module.exports = pool;