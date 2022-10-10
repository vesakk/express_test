const Redis = require("redis");

const express = require("express");
const app = express();
const port = 3000;

const redis = Redis.createClient({
  host: "ip-10-0-17-15.ec2.internal",
  db: 0,
  port: 6379,
});

console.log(redis)

redis.on("error", (err) => console.log("Redis Client Error", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
