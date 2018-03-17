import { createActions } from 'redux-actions';

import {
  SUBJECTS
} from '../constants';

export const subjectsActions = createActions({
  [SUBJECTS.REQUEST]: null,
  [SUBJECTS.SUCCESS]: list => ({ list }),
  [SUBJECTS.ERROR]: null,
})
