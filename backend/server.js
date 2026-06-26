import cluster from "cluster";
import chalk from "chalk";
import os from "os";

import { appConfig } from "$app/config/index.js";

import app from "$app";

const numCPUs = os.cpus().length;

console.log(`----- Number of cores: ${numCPUs} -----`);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for app servers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Fork a dedicated worker for metrics collection
  const metricsWorker = cluster.fork({ METRICS_WORKER: "true" });
  metricsWorker.on("online", () => {
    console.log(`Metrics worker ${metricsWorker.process.pid} is online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} exited with code ${code} and signal ${signal}`
    );
  });
} else {
  // Metrics worker process
  if (process.env.METRICS_WORKER === "true") {
    console.log(chalk.yellow(`Metrics worker ${process.pid} started`));
  } else {
    // Regular app worker process
    app.listen(appConfig.port, () => {
      console.log(chalk.cyan(`App is running on ${appConfig.port}`));
    });
  }
}
