import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default client;
