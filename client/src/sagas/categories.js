import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  CATEGORIES
} from '../constants';

import {
  categoriesActions
} from '../actions';


function* fetchCategories() {
  try {
    const { data: { data, isError } } = yield call(axios,'/api/categories');
    console.log(data);
    if (isError) throw Error();
    yield put(categoriesActions.categoriesSuccess(data));
  } catch (e) {
    yield put(categoriesActions.categoriesError())
  }
}

export function* fetchCategoriesSaga() {
  yield takeLatest(CATEGORIES.REQUEST, fetchCategories)
}
