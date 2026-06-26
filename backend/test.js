import { appConfig } from "$app/config/index.js";

import app from "$app";

import chalk from "chalk";

app.listen(appConfig.port, () => {
  console.log(chalk.cyan(`App is running on ${appConfig.port}`));
});
