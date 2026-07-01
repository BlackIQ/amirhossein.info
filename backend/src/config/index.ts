import dotenv from "dotenv";

dotenv.config();

// Check if required environment variables are set
export const required = (name: keyof NodeJS.ProcessEnv): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
};

// App settings
export const APP_PORT: string  = required("APP_PORT");
export const APP_SECRET: string  = required("APP_SECRET");
export const APP_ENVIRONMENT: string  = required("APP_ENVIRONMENT");
export const APP_PUBLISHED: boolean = APP_ENVIRONMENT === "production";

// Database settings
export const MONGO_CONNECTION_STRING: string = required("MONGO_CONNECTION_STRING");
