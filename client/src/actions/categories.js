import { createActions } from 'redux-actions';

import {
  CATEGORIES,
} from '../constants';

export const categoriesActions = createActions({
  [CATEGORIES.REQUEST]: null,
  [CATEGORIES.SUCCESS]: list => ({ list }),
  [CATEGORIES.ERROR]: null,
});
