import axios from "axios";

import config from "../../config";
import urls from "./urls";

export const URLs = urls;
export const API = axios.create({
  baseURL: config.axiosBaseUrl,
});
