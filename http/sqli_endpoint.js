const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'app',
});

// Continuous-scan test endpoint: raw SQL string concatenation (SQL injection).
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  connection.query(query, (err, results) => {
    if (err) return res.status(500).send('db error');
    res.json(results);
  });
});

module.exports = app;
