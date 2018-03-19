import { take, fork, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  SUBJECTS,
  INSERT_SUBJECT
} from '../constants';

import {
  subjectsActions,
} from '../actions';

import {
  fetchSubjectsApi,
  insertSubjectApi
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
