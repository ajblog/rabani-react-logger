const initialState = {
  type: "",
  payload: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return { type: "Error", payload: action.payload };
    default:
      return state;
  }
}

export default { reducer, initialState };
