import axios from "axios";
import useToken from "../hooks/useToken";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // Default headers (optional)
  },
});

// Add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config before sending, like adding auth token
    const token = config.token || null; // Pass token via request config
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (optional)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, like redirecting to login
      // e.g., logoutUser();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
