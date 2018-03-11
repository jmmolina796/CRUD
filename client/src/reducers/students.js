import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

import {
  STUDENTS,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
});

const students = handleActions({
  [STUDENTS.REQUEST]: state => state.merge(state, { isFetching: true, didError: false }),
  [STUDENTS.SUCCESS]: (state, { payload: { list } }) => state.merge(state, { isFetching: false, didError: false, list: list }),
  [STUDENTS.ERROR]: state => state.merge(state, { isFetching: false, didError: true }),
}, initialState);

export default students;
