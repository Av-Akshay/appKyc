import { useState } from "react";
import { useForm } from "react-hook-form";

import useToken from "./useToken";
import axiosInstance from "../utils/axiosInstance";

const usePostBlog = () => {
  const { token } = useToken();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setMessage("");
    setLoading(true);
    try {
      const response = await axiosInstance.post("blogs", data, { token });
      if (response.status === 201) {
        alert("Blog posted successfully.");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setMessage("Bad Request: Please check your input.");
            break;
          case 401:
            setMessage("Unauthorized: Invalid token.");
            break;
          case 403:
            setMessage("Forbidden: You do not have permission.");
            break;
          case 404:
            setMessage("Not Found: Endpoint does not exist.");
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
        setMessage("No response received from server. Please try again.");
      } else {
        setMessage(err.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
      reset();
    }
  };

  return {
    handleSubmit,
    submitForm,
    register,
    errors,
    message,
    loading,
    getMessage,
    blogs,
  };
};

export default usePostBlog;
