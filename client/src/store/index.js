import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { historyMiddleware } from '../history';
import rootReducer from '../reducers';
import { initSagas } from '../initSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(sagaMiddleware, historyMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	)
);

initSagas(sagaMiddleware);

export default store;
