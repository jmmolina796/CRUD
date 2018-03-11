import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import students from './students';

const root = combineReducers({
  router,
  students,
});

export default root;
