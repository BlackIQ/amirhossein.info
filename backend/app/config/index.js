import dotenv from "dotenv";

dotenv.config();

const env = process.env;

// App settings
export const APP_PORT = env.APP_PORT;
export const APP_SECRET = env.APP_SECRET;
export const APP_ENVIRONMENT = env.APP_ENVIRONMENT;
export const APP_PUBLISHED = APP_ENVIRONMENT ?? "production";

// Database settings
export const MONGO_CONNECTION_STRING = env.MONGO_CONNECTION_STRING;
