import { take, fork, call, put, cancelled } from 'redux-saga/effects';

import {
  SUBJECTS
} from '../constants';

import {
  subjectsActions,
} from '../actions';

import {
  fetchSubjectsApi,
} from '../api';

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
