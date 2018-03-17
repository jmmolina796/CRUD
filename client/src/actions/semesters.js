import { createActions } from 'redux-actions';

import {
  SEMESTERS,
} from '../constants';

export const semestersActions = createActions({
  [SEMESTERS.REQUEST]: null,
  [SEMESTERS.SUCCESS]: list => ({ list }),
  [SEMESTERS.ERROR]: null,
});
