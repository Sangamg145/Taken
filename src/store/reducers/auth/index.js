// Constants
const AUTH_SUCCESS = 'AUTH_SUCCESS';

// Utility function to update the state object
const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

// Initial state
const initialState = {
  token: null,
};

// Reducer function for authentication success
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
  });
};

// Main reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    default:
      return state;
  }
};

// Action creator
export const authSuccessAction = token => {
  return {
    type: AUTH_SUCCESS,
    token,
  };
};

export default reducer;
