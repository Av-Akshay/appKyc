import { useState } from "react";
import { useForm } from "react-hook-form";

const usePostBlog = () => {
  const [message, setMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setMessage("");

    try {
    } catch (message) {}
  };

  return {
    handleSubmit,
    submitForm,
    register,
    errors,
    message,
  };
};

export default usePostBlog;
