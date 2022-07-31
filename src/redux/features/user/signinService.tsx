import axios from "./../../../services/httpService";
import { rest } from "./../../../services/api";
export const login = async (userData: any) => {
  const response = await axios.post(rest.auth.signin, userData);
  return response.data;
};
