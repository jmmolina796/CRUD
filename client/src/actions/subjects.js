import { createActions } from 'redux-actions';

import {
  SUBJECTS,
  INSERT_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT,
} from '../constants';

export const subjectsActions = createActions({
  [SUBJECTS.REQUEST]: null,
  [SUBJECTS.SUCCESS]: list => ({ list }),
  [SUBJECTS.ERROR]: null,
  [INSERT_SUBJECT.REQUEST]: subject => ({ subject }),
  [INSERT_SUBJECT.SUCCESS]: subject => ({ subject }),
  [INSERT_SUBJECT.ERROR]: null,
  [UPDATE_SUBJECT.REQUEST]: (subject, id) => ({ subject, id }),
  [UPDATE_SUBJECT.SUCCESS]: subject => ({ subject }),
  [UPDATE_SUBJECT.ERROR]: null,
  [DELETE_SUBJECT.REQUEST]: id => ({ id }),
  [DELETE_SUBJECT.SUCCESS]: id => ({ id }),
  [DELETE_SUBJECT.ERROR]: null,
})
