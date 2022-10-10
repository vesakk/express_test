import { createClient } from 'redis';

const client = createClient({
  host: "ip-10-0-17-15.ec2.internal",
  db: 0,
  port: 6379,
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');

