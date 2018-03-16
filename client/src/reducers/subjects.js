import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  SUBJECTS,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
});

const subjects = handleActions({
  [SUBJECTS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [SUBJECTS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [SUBJECTS.ERROR]: state => state.merge({ isFetching: false, didError: true }),
}, initialState);

export default subjects;
