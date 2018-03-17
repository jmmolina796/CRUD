import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  STUDENTS,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
});

const students = handleActions({
  [STUDENTS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [STUDENTS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [STUDENTS.ERROR]: state => state.merge({ isFetching: false, didError: true }),
}, initialState);

export default students;
