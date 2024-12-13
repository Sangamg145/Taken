import {combineReducers} from 'redux';

import auth from './auth';
import user from './home';
export default combineReducers({auth, user});
