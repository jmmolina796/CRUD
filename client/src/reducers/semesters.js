import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  SEMESTERS,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
});

const semesters = handleActions({
  [SEMESTERS.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [SEMESTERS.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [SEMESTERS.ERROR]: state => state.merge({ isFetching: false, didError: true }),
}, initialState);

export default semesters;
