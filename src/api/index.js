import axios from "axios";

export const API = axios.create({
<<<<<<< HEAD
  baseURL: process.env["API_URL"] || "http://localhost:8000/api",
=======
  baseURL: process.env["API_URL"] || "https://amirhossein.info/api",
>>>>>>> 53d56305ac9248d569177abd414e23aac8499736
});
