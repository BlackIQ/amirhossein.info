import { APP_PORT } from "$app/config/index.js";

import app from "$app";

import chalk from "chalk";

app.listen(APP_PORT, () => {
  console.log(chalk.cyan(`App is running on ${APP_PORT}`));
});
