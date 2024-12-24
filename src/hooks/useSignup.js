import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import axiosInstance from "../utils/axiosInstance";
import { addToken } from "../store/slice";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

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
      const response = await axiosInstance.post("auth/login", data);
      console.log(response);
      if (response?.status === 201) {
        dispatch(addToken(response?.data?.token));
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        // Handle specific HTTP status codes
        switch (err.response.status) {
          case 400:
            setMessage("Bad Request: Please check your input.");
            break;
          case 401:
            setMessage("Unauthorized: Invalid credentials.");
            break;
          case 403:
            setMessage("Forbidden: You do not have access.");
            break;
          case 404:
            setMessage("Not Found: The requested resource is unavailable.");
            break;
          case 500:
            setMessage("Internal Server Error: Please try again later.");
            break;
          default:
            setMessage(err.response.data.message || "Something went wrong!");
            break;
        }
      } else if (err.request) {
        // Request was made but no response was received
        setMessage("No response received from server. Please try again.");
      } else {
        // Something else happened
        setMessage(err.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    register,
    submitForm,
    message,
    errors,
    loading,
  };
};

export default useSignup;
