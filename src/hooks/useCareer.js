import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const useCareer = () => {
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axiosInstance.get("jobs");

      if (response.status === 200) {
        setJobs(response?.data);
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
    fetchJobs();
  }, []);
  return {
    jobs,
    message,
    loading,
  };
};

export default useCareer;
