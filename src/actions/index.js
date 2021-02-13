export const inputSearch = (arg) => {
  return {
    type: "INPUT_SEARCH",
    payload: arg,
  };
};

export const inputYear = (arg) => {
  return {
    type: "INPUT_YEAR",
    payload: arg,
  };
};

export const isLoadMovie = () => {
  return {
    type: "SET_LOADING_TRUE",
  };
};

export const isLoadedMovie = () => {
  return {
    type: "SET_LOADING_FALSE",
  };
};
