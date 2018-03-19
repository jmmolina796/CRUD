import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  SUBJECTS,
  INSERT_SUBJECT,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
  isFetchingInsert: false,
  didErrorInsert: false
});

const subjects = handleActions({
  [SUBJECTS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [SUBJECTS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [SUBJECTS.ERROR]: state => state.merge({ isFetching: false, didError: true }),
  [INSERT_SUBJECT.REQUEST]: state => state.merge({ isFetchingInsert: true, didErrorInsert: false }),
  [INSERT_SUBJECT.SUCCESS]: (state, { payload: { subject } }) => state.merge({ isFetchingInsert: false, didErrorInsert: false}).setIn(['list', subject[0].id], subject[0]),
  [INSERT_SUBJECT.ERROR]: state => state.merge({ isFetchingInsert: false, didErrorInsert: true }),
}, initialState);

export default subjects;
