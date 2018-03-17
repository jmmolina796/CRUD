import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import students from './students';
import subjects from './subjects';
import semesters from './semesters';
import categories from './categories';

const root = combineReducers({
  router,
  form,
  students,
  subjects,
  semesters,
  categories,
});

export default root;
