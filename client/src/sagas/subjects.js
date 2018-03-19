import { take, fork, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  SUBJECTS,
  INSERT_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT,
} from '../constants';

import {
  subjectsActions,
} from '../actions';

import {
  fetchSubjectsApi,
  insertSubjectApi,
  updateSubjectApi,
  deleteSubjectApi,
} from '../api';

// FETCH

function* fetchSubjects() {
  try {
    const { data, isError } = yield call(fetchSubjectsApi.run);
    if (isError) throw Error();
    yield put(subjectsActions.subjectsSuccess(data));
  } catch (e) {
    yield put(subjectsActions.subjectsError());
  } finally {
    if(yield cancelled()) {
      yield call(fetchSubjectsApi.cancel);
    }
  }
}
export function* fetchSubjectsSaga() {
  while(yield take(SUBJECTS.REQUEST)) {
    yield fork(fetchSubjects);
  }
}

// INSERT

function* insertSubject(subject) {
  try {
    const { data, isError } = yield call(insertSubjectApi.run, subject);
    if (isError) throw Error();
    yield put(subjectsActions.insertSubjectSuccess(data));
  } catch (e) {
    yield put(subjectsActions.insertSubjectError());
  } finally {
    if(yield cancelled()) {
      yield call(insertSubjectApi.cancel);
    } else {
      yield put(push('/subjects'));
    }
  }
}
export function* insertSubjectSaga() {
  while(true) {
    const { payload: { subject } } = yield take(INSERT_SUBJECT.REQUEST);
    yield fork(insertSubject, subject);
  }
}

// UPDATE

function* updateSubject(subject, id) {
  try {
    const { data, isError } = yield call(updateSubjectApi.run, subject, id);
    if (isError) throw Error();
    yield put(subjectsActions.updateSubjectSuccess(data));
  } catch (e) {
    yield put(subjectsActions.updateSubjectError());
  } finally {
    if(yield cancelled()) {
      yield call(updateSubjectApi.cancel);
    } else {
      yield put(push('/subjects'));
    }
  }
}
export function* updateSubjectSaga() {
  while(true) {
    const { payload: { subject, id } } = yield take(UPDATE_SUBJECT.REQUEST);
    yield fork(updateSubject, subject, id);
  }
}

// DELETE

function* deleteSubject(id) {
  try {
    const { data, isError } = yield call(deleteSubjectApi.run, id);
    if (isError) throw Error();
    yield put(subjectsActions.deleteSubjectSuccess(data.id));
  } catch (e) {
    yield put(subjectsActions.deleteSubjectError());
  } finally {
    if(yield cancelled()) {
      yield call(deleteSubjectApi.cancel);
    } else {
      yield put(push('/subjects'));
    }
  }
}
export function* deleteSubjectSaga() {
  while(true) {
    const { payload: { id } } = yield take(DELETE_SUBJECT.REQUEST);
    yield fork(deleteSubject, id);
  }
}
