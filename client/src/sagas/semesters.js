import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  SEMESTERS
} from '../constants';

import {
  semestersActions
} from '../actions';


function* fetchSemesters() {
  try {
    const { data: { data, isError } } = yield call(axios, '/api/semesters');
    if (isError) throw Error();
    yield put(semestersActions.semestersSuccess(data));
  } catch (e) {
    yield put(semestersActions.semestersError())
  }
}

export function* fetchSemestersSaga() {
  yield takeLatest(SEMESTERS.REQUEST, fetchSemesters)
}
