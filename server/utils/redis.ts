import { Redis } from 'ioredis';

const redisClient = () => {
     if (process.env.REDIS_URL) {
          console.log('Redis connected!');
          return process.env.REDIS_URL;
     }

     throw new Error('Redis error');
};

export const connectRedis = new Redis(redisClient());
