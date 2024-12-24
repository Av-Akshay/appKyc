import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import usePostJobs from "../hooks/usePostJobs";
import useToken from "../hooks/useToken";

const PostJob = () => {
  const { errors, handleSubmit, message, register, submitForm } = usePostJobs();

  const navigate = useNavigate();
  const { token } = useToken();
  useEffect(() => {
    if (!token) {
      navigate("/admin-console");
    }
  }, []);

  return (
    <div className="bg-section-background flex flex-col gap-5 items-center justify-center w-full py-16">
      {message ? (
        <h1 className="text-4xl font-bold  text-red-500 mt-10 font-serif ">
          {message}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold  text-white mt-10 font-serif ">
          Post Job
        </h1>
      )}
      <div className="w-3/5 p-10 border-white border-2 shadow-lg shadow-white rounded-2xl mb-10 max-sm:w-11/12">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="flex flex-col">
            <Input
              className="rounded-lg"
              label="title:"
              placeholder="Enter Title"
              type="text"
              {...register("title", {
                required: "The title is required.",
              })}
            />
            {errors.title && (
              <p className="error-message text-red-500">
                {errors?.title?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Input
              className="rounded-lg border "
              label="Enter location:"
              placeholder="Enter Location"
              type="text"
              {...register("location", {
                required: "Location is required.",
              })}
            />
            {errors.location && (
              <p className="error-message text-red-500">
                {errors?.location?.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="Description"
              className="text-white font-poppinsMedium uppercase "
            >
              Description:
            </label>
            <textarea
              className="rounded-lg"
              id="Description"
              cols={15}
              rows={5}
              {...register("description", {
                required: "The Description is required.",
              })}
            ></textarea>
            {errors.description && (
              <p className="error-message text-red-500">
                {errors?.description?.message}
              </p>
            )}
          </div>
          <button className="text-section-background font-poppinsSemibold py-1 capitalize text-lg w-full text-center bg-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
