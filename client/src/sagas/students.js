import { take, fork, call, put, cancelled } from 'redux-saga/effects';

import {
  STUDENTS
} from '../constants';

import {
  studentsActions,
} from '../actions';

import {
  fetchStudentsApi,
} from '../api';

function* fetchStudents() {
  try {
    const { data, isError } = yield call(fetchStudentsApi.run);
    if (isError) throw Error();
    yield put(studentsActions.studentsSuccess(data));
  } catch (e) {
    yield put(studentsActions.studentsError());
  } finally {
    if(yield cancelled()) {
      yield call(fetchStudentsApi.cancel);
    }
  }
}
export function* fetchStudentsSaga() {
  while(yield take(STUDENTS.REQUEST)) {
    yield fork(fetchStudents);
  }
}
