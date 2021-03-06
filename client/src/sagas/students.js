import { take, fork, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  STUDENTS,
  INSERT_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from '../constants';

import {
  studentsActions,
} from '../actions';

import {
  fetchStudentsApi,
  insertStudentApi,
  updateStudentApi,
  deleteStudentApi,
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
    const { payload: { student } } = yield take(INSERT_STUDENT.REQUEST);
    yield fork(insertStudent, student);
  }
}

// UPDATE

function* updateStudent(student, id) {
  try {
    const { data, isError } = yield call(updateStudentApi.run, student, id);
    if (isError) throw Error();
    yield put(studentsActions.updateStudentSuccess(data));
  } catch (e) {
    yield put(studentsActions.updateStudentError());
  } finally {
    if(yield cancelled()) {
      yield call(updateStudentApi.cancel);
    } else {
      yield put(push('/students'));
    }
  }
}
export function* updateStudentSaga() {
  while(true) {
    const { payload: { student, id } } = yield take(UPDATE_STUDENT.REQUEST);
    yield fork(updateStudent, student, id);
  }
}

// DELETE

function* deleteStudent(id) {
  try {
    const { data, isError } = yield call(deleteStudentApi.run, id);
    if (isError) throw Error();
    yield put(studentsActions.deleteStudentSuccess(data.id));
  } catch (e) {
    yield put(studentsActions.deleteStudentError());
  } finally {
    if(yield cancelled()) {
      yield call(deleteStudentApi.cancel);
    } else {
      yield put(push('/students'));
    }
  }
}
export function* deleteStudentSaga() {
  while(true) {
    const { payload: { id } } = yield take(DELETE_STUDENT.REQUEST);
    yield fork(deleteStudent, id);
  }
}
