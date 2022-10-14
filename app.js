require('dotenv').config({
  path: './.env'
})

const express = require('express')
const mysql = require('mysql2/promise')
const bluebird = require('bluebird');

const app = express()
const port = 3000


// Create the connection, specify bluebird as Promise
const db_connection = mysql.createConnection({
  host: process.env.DB_ENDPOINT,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  Promise: bluebird
});


dbConn.queryAsync(`

  SELECT
      *
  FROM
    table

`).then(result => {

  console.log(result);

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})