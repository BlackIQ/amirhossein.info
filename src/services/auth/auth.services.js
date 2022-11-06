import { API, URLs } from "../../config/api";

const { auth } = URLs;

export const login = async (body) => {
  try {
    const response = await API.post(auth.login, body);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const register = async (body) => {
  try {
    const response = await API.post(auth.register, body);

    return response.data;
  } catch (error) {
    return error;
  }
};
