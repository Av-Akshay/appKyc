import { useSelector } from "react-redux";

const useToken = () => {
  const token = useSelector((store) => store?.token);

  return {
    token,
  };
};

export default useToken;
