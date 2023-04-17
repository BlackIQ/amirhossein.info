export const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "SET_THEME":
      return (state = action.payload);
    default:
      return state;
  }
};
