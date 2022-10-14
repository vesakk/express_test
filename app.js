require('dotenv').config({
  path: './.env'
})

const express = require('express')
const mysql = require('mysql2')
const bluebird = require('bluebird');

const app = express()
const port = 3000


// Create the connection, specify bluebird as Promise
const db_conn = mysql.createConnection({
  host: process.env.DB_ENDPOINT,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db_conn.promise().query("SELECT 1")
  .then(([rows, fields]) => {

    console.log(rows)

  })
  .catch(console.log)
  .then(() => db_conn.end())




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})