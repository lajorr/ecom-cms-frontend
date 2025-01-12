import axios from "axios";

const baseURL = "http://localhost:8080/api";

export const api = () => {
  const axiosConfig = {
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(axiosConfig);
  return instance;
};
