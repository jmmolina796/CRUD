import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import students from './students';
import subjects from './subjects';

const root = combineReducers({
  router,
  students,
  subjects,
});

export default root;
