import { take, fork, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  STUDENTS,
  INSERT_STUDENT,
} from '../constants';

import {
  studentsActions,
} from '../actions';

import {
  fetchStudentsApi,
  insertStudentApi,
} from '../api';

// FETCH

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

// INSERT

function* insertStudent(student) {
  try {
    const { data, isError } = yield call(insertStudentApi.run, student);
    if (isError) throw Error();
    yield put(studentsActions.insertStudentSuccess(data));
  } catch (e) {
    yield put(studentsActions.insertStudentError());
  } finally {
    if(yield cancelled()) {
      yield call(insertStudentApi.cancel);
    } else {
      yield put(push('/students'));
    }
  }
}
export function* insertStudentSaga() {
  while(true) {
    debugger;
    const { payload: { student } } = yield take(INSERT_STUDENT.REQUEST);
    yield fork(insertStudent, student);
  }
}
