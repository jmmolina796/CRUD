import { createActions } from 'redux-actions';

import {
  SUBJECTS,
  INSERT_SUBJECT
} from '../constants';

export const subjectsActions = createActions({
  [SUBJECTS.REQUEST]: null,
  [SUBJECTS.SUCCESS]: list => ({ list }),
  [SUBJECTS.ERROR]: null,
  [INSERT_SUBJECT.REQUEST]: subject => ({ subject }),
  [INSERT_SUBJECT.SUCCESS]: subject => ({ subject }),
  [INSERT_SUBJECT.ERROR]: null,
})
