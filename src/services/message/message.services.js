import { API, URLs } from "../../config/api";

const { message } = URLs;

export const readAll = async () => {
  try {
    const response = await API.get(message);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteOne = async (id) => {
  try {
    const response = await API.delete(`${message}/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const readOne = async (id) => {
  try {
    const response = await API.get(`${message}/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create = async (body) => {
  try {
    const response = await API.post(message, body);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
