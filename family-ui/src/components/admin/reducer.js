export const addProfileReducer = (state, action) => {
  //
  switch (action.type) {
    case "update_profile":
      return {
        ...state,
        [action.key]: action.value,
      };
  }
  throw Error("Unknown action: " + action.type);
};
