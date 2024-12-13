import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers'; // Your root reducer
import {thunk} from 'redux-thunk';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
