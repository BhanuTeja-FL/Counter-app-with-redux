export const incrementHandler = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decrementHandler = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
