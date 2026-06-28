import { APP_PORT } from "@src/config/index.js";

import app from "@src/app.js";

import chalk from "chalk";

app.listen(APP_PORT, () => {
  console.log(chalk.cyan(`App is running on ${APP_PORT}`));
});
