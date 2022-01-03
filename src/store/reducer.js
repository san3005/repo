const initialState = {
  isLoggedIn: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { isLoggedIn: true };
    }
    case "USER_LOGOUT": {
      return { isLoggedIn: false };
    }
    default:
      return state;
  }
};

export default reducer;
