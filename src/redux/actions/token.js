export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const unsetToken = () => {
  return {
    type: "UNSET_TOKEN",
  };
};
