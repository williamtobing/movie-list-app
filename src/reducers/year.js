const yearReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_YEAR":
      return action.payload;
    default:
      return state;
  }
};

export default yearReducer;
