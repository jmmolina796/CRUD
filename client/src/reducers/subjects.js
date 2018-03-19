import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  SUBJECTS,
  INSERT_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT,
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

const subjects = handleActions({
  [SUBJECTS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [SUBJECTS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [SUBJECTS.ERROR]: state => state.merge({ isFetching: false, didError: true }),

  [INSERT_SUBJECT.REQUEST]: state => state.merge({ isFetchingInsert: true, didErrorInsert: false }),
  [INSERT_SUBJECT.SUCCESS]: (state, { payload: { subject } }) => state.merge({ isFetchingInsert: false, didErrorInsert: false}).setIn(['list', subject[0].id], subject[0]),
  [INSERT_SUBJECT.ERROR]: state => state.merge({ isFetchingInsert: false, didErrorInsert: true }),

  [UPDATE_SUBJECT.REQUEST]: state => state.merge({ isFetchingUpdate: true, didErrorUpdate: false }),
  [UPDATE_SUBJECT.SUCCESS]: (state, { payload: { subject } }) => state.merge({ isFetchingUpdate: false, didErrorUpdate: false}).updateIn(['list', subject[0].id], () => subject[0]),
  [UPDATE_SUBJECT.ERROR]: state => state.merge({ isFetchingUpdate: false, didErrorUpdate: true }),

  [DELETE_SUBJECT.REQUEST]: state => state.merge({ isFetchingDelete: true, didErrorDelete: false }),
  [DELETE_SUBJECT.SUCCESS]: (state, { payload: { id } }) => state.merge({ isFetchingDelete: false, didErrorDelete: false, list: state.list.without(id) }),
  [DELETE_SUBJECT.ERROR]: state => state.merge({ isFetchingDelete: false, didErrorDelete: true }),

}, initialState);

export default subjects;
