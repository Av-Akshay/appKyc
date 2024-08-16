import { useForm } from "react-hook-form";

const useContact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handelSubmitForm = (data) => {
    const mailtoLink = `mailto:appkyc658@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(data.message)}`;
    window.location.href = mailtoLink;

    reset();
  };
  return {
    handleSubmit,
    register,
    errors,
    handelSubmitForm,
  };
};

export default useContact;
