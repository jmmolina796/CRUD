import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  STUDENTS,
  INSERT_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
  isFetchingInsert: false,
  didErrorInsert: false,
  isFetchingUpdate: false,
  didErrorUpdate: false,
  isFetchingDelete: false,
  didErrorDelete: false,
});

const students = handleActions({
  [STUDENTS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [STUDENTS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [STUDENTS.ERROR]: state => state.merge({ isFetching: false, didError: true }),

  [INSERT_STUDENT.REQUEST]: state => state.merge({ isFetchingInsert: true, didErrorInsert: false }),
  [INSERT_STUDENT.SUCCESS]: (state, { payload: { student } }) => state.merge({ isFetchingInsert: false, didErrorInsert: false}).setIn(['list', student[0].id], student[0]),
  [INSERT_STUDENT.ERROR]: state => state.merge({ isFetchingInsert: false, didErrorInsert: true }),

  [UPDATE_STUDENT.REQUEST]: state => state.merge({ isFetchingUpdate: true, didErrorUpdate: false }),
  [UPDATE_STUDENT.SUCCESS]: (state, { payload: { student } }) => state.merge({ isFetchingUpdate: false, didErrorUpdate: false}).updateIn(['list', student[0].id], () => student[0]),
  [UPDATE_STUDENT.ERROR]: state => state.merge({ isFetchingUpdate: false, didErrorUpdate: true }),

  [DELETE_STUDENT.REQUEST]: state => state.merge({ isFetchingDelete: true, didErrorDelete: false }),
  [DELETE_STUDENT.SUCCESS]: (state, { payload: { id } }) => state.merge({ isFetchingDelete: false, didErrorDelete: false, list: state.list.without(id) }),
  [DELETE_STUDENT.ERROR]: state => state.merge({ isFetchingDelete: false, didErrorDelete: true }),

}, initialState);

export default students;
