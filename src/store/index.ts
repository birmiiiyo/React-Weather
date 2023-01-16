import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from '@saga/index'

import { rootReducer } from './reducers';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);

sagaMiddleWare.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch