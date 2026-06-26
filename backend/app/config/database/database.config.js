import env from "$app/env/index.js";

export default {
  mongo: {
    connection: env.MONGO_CONNNECTION_STRING,
  },
};
