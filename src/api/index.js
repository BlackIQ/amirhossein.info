import axios from "axios";

export const API = axios.create({
  // baseURL: "https://resume.amirhossein.info/api",
  baseURL: "http://localhost:8000/api",
});
