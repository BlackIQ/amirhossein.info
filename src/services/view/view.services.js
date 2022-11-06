import { API, URLs } from "../../config/api";

const { view } = URLs;

export const readAll = async () => {
  try {
    const response = await API.get(view);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
