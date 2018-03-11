import { delay } from 'redux-saga';

export function* fetchStudents() {
  yield delay(100);
}
