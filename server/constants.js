import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
export const DB_NAME = "humotion";
export const MONGODB_URL = process.env.MONGODB_URL || `mongodb://localhost:27017/${DB_NAME}`;
export const PORT = process.env.PORT || 3000;