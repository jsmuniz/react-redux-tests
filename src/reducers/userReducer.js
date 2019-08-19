export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      if (!state.find(user => user.id === action.id))
        return [...state, action.payload];
      else return state;
    default:
      return state;
  }
};
