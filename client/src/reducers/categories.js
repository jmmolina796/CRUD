import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  CATEGORIES,
} from '../constants';

const initialState = Immutable({
  list: {},
  isFetching: true,
  didError: false,
});

const categories = handleActions({
  [CATEGORIES.REQUEST]: state => state.merge({ isFetching: true, didError: false }),
  [CATEGORIES.SUCCESS]: (state, { payload: { list } }) => state.merge({ isFetching: false, didError: false, list: _.keyBy(list, 'id')}),
  [CATEGORIES.ERROR]: state => state.merge({ isFetching: false, didError: true }),
}, initialState);

export default categories;
