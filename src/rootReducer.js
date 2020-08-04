const INITIAL_STATE = {memes: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { ...state,  };

    case "DELETE_MEME":
      return { ...state,  };

    default:
      return state;
  }
}

export default rootReducer;
