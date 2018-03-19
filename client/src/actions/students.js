import { createActions } from 'redux-actions';

import {
  STUDENTS,
  INSERT_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from '../constants';

export const studentsActions = createActions({
  [STUDENTS.REQUEST]: null,
  [STUDENTS.SUCCESS]: list => ({ list }),
  [STUDENTS.ERROR]: null,
  [INSERT_STUDENT.REQUEST]: student => ({ student }),
  [INSERT_STUDENT.SUCCESS]: student => ({ student }),
  [INSERT_STUDENT.ERROR]: null,
  [UPDATE_STUDENT.REQUEST]: (student, id) => ({ student, id }),
  [UPDATE_STUDENT.SUCCESS]: student => ({ student }),
  [UPDATE_STUDENT.ERROR]: null,
  [DELETE_STUDENT.REQUEST]: id => ({ id }),
  [DELETE_STUDENT.SUCCESS]: id => ({ id }),
  [DELETE_STUDENT.ERROR]: null,
});
