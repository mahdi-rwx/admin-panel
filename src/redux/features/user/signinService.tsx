import axios from "axios";

export const login = async (userData: any) => {
  const response = await axios.post(
    "http://127.0.0.1:3012/api/admin/signin",
    userData
  );
  return response.data;
};
