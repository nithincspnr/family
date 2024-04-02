const initialAddProfileState = {
  searchResults: {
    partner: [],
    kids: [],
    parents: [],
  },
  newProfile: {
    name: "",
    place: "",
    partner: [],
    kids: [],
    parents: [],
  },
};

const AddProfileReducer = (state, action) => {
  switch (action.type) {
    case "search_result": {
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [action.searchFor]: [...action.results],
        },
      };
    }
    case "update_profile": {
      return {
        ...state,
        newProfile: {
          ...state.newProfile,
          [action.field]: action.value,
        },
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};

export { AddProfileReducer, initialAddProfileState };
