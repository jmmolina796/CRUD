import { createActions } from 'redux-actions';

import {
  STUDENTS,
} from '../constants';

export const studentsActions = createActions({
  [STUDENTS.REQUEST]: null,
  [STUDENTS.SUCCESS]: list => ({ list }),
  [STUDENTS.ERROR]: null,
});
