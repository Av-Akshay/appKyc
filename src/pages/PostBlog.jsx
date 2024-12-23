import React from "react";
import Input from "../components/Input";
import usePostBlog from "../hooks/usePostBlog";
import { Button } from "../components";

const PostBlog = () => {
  const { errors, handleSubmit, message, register, submitForm } = usePostBlog();

  return (
    <div className="bg-section-background flex flex-col gap-5 items-center justify-center w-full py-16">
      <h1 className="text-5xl text-white font-poppinsSemibold ">Post Blogs</h1>
      <div className="w-3/5 p-10 border-white border-2 rounded-2xl mb-10">
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
              className="rounded-lg"
              label="author:"
              placeholder="Author Name"
              type="text"
              {...register("author", {
                required: "The author name is required.",
              })}
            />
            {errors.author && (
              <p className="error-message text-red-500">
                {errors?.author?.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="content"
              className="text-white font-poppinsMedium uppercase "
            >
              Content:
            </label>
            <textarea
              className="rounded-lg"
              id="content"
              cols={15}
              rows={5}
              {...register("content", {
                required: "The content is required.",
              })}
            ></textarea>
            {errors.content && (
              <p className="error-message text-red-500">
                {errors?.content?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Input
              className="rounded-lg border border-white !p-0 overflow-hidden my-1"
              label="Upload photo:"
              type="file"
              {...register("photo", {
                required: "Photo is required.",
                validate: {
                  // Validate file type
                  acceptedFormats: (files) =>
                    ["image/jpeg", "image/png"].includes(files[0]?.type) ||
                    "Only JPEG and PNG files are accepted.",
                  // Validate file size (e.g., less than 2MB)
                  fileSize: (files) =>
                    files[0]?.size < 2 * 1024 * 1024 ||
                    "File size should be less than 2MB.",
                },
              })}
            />
            {errors.photo && (
              <p className="error-message text-red-500">
                {errors?.photo?.message}
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

export default PostBlog;
