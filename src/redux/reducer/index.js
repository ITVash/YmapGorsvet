import { combineReducers } from 'redux';

import auth from './auth';
import coup from './coup';
import opora from './opora';

export default combineReducers({
  auth,
  coup,
  opora
});