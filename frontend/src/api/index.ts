import axios, { AxiosInstance } from "axios";

export const API: AxiosInstance = axios.create({
  baseURL: process.env["NEXT_PUBLIC_API_URL"],
});

export const NextAPI: AxiosInstance = axios.create({
  baseURL: "/api",
});
