export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_MODE":
      return {
        ...state,
        isMode: action.payload,
      };

    case "MODE":
      return {
        ...state,
        mode: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        apiErrorMessage: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };

    default:
      return state;
  }
};
