export const setUserToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const unsetUserToken = () => {
  return {
    type: "UNSET_TOKEN",
  };
};
