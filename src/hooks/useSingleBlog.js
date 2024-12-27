import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axiosInstance from "../utils/axiosInstance";

const useSingleBlog = () => {
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [blogData, setBlogData] = useState(null);

  const fetchBlog = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axiosInstance.get(`blogs/${id}`);
      console.log(response);
      if (response.status === 200) {
        setBlogData(response?.data);
      }
    } catch (err) {
      if (err.response) {
        // Server responded with a status code
        switch (err.response.status) {
          case 400:
            setMessage("Bad Request: Please check your request.");
            break;
          case 401:
            setMessage("Unauthorized: Please login to access this resource.");
            break;
          case 403:
            setMessage("Forbidden: You do not have permission.");
            break;
          case 404:
            setMessage("Not Found: The resource does not exist.");
            break;
          case 500:
            setMessage("Internal Server Error: Please try again later.");
            break;
          default:
            setMessage(
              err.response.data.message || "An unexpected error occurred."
            );
            break;
        }
      } else if (err.request) {
        // Request made but no response received
        setMessage("No response from server. Please try again.");
      } else {
        // Other errors
        setMessage(err.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  console.log(blogData);

  return {
    loading,
    message,
    blogData,
  };
};

export default useSingleBlog;
