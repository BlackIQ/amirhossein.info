import axios from "axios";

import config from "../config";

export const API = axios.create({
  baseURL: config.axiosBaseUrl,
});
