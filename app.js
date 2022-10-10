import { createClient } from "redis";

const client = createClient({
  url: "redis://alice:foobared@10.0.17.15:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.set("key", "value");
const value = await client.get("key");
