import dotenv from "dotenv";
import redis from "redis";

dotenv.config();

const redisClient = redis.createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

await redisClient.connect();

export default redisClient;
