import {GET_USER} from '../../constants';

// Initial state
const initialState = {
  user: null,
};

// Main reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      // Return updated state with user data
      return {
        ...state, // Keep other state properties (if any)
        user: action.data, // Update user data
      };
    default:
      return state; // Return the current state for other actions
  }
};

export default reducer;
