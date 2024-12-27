import { useEffect, useState } from "react";

import axiosInstance from "../utils/axiosInstance";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [getMessage, setGetMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    setGetMessage("");
    try {
      const response = await axiosInstance.get("blogs");
      if (response.status === 200) {
        setBlogs(response?.data);
      }
    } catch (err) {
      if (err.response) {
        // Server responded with a status code
        switch (err.response.status) {
          case 400:
            setGetMessage("Bad Request: Please check your request.");
            break;
          case 401:
            setGetMessage(
              "Unauthorized: Please login to access this resource."
            );
            break;
          case 403:
            setGetMessage("Forbidden: You do not have permission.");
            break;
          case 404:
            setGetMessage("Not Found: The resource does not exist.");
            break;
          case 500:
            setGetMessage("Internal Server Error: Please try again later.");
            break;
          default:
            setGetMessage(
              err.response.data.message || "An unexpected error occurred."
            );
            break;
        }
      } else if (err.request) {
        // Request made but no response received
        setGetMessage("No response from server. Please try again.");
      } else {
        // Other errors
        setGetMessage(err.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    getMessage,
    loading,
    blogs,
  };
};

export default useBlog;
