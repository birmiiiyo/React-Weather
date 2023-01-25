import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootSaga } from 'saga'

import { rootReducer } from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['calendar', 'location', 'hourlyWeather'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
)

export const persistor = persistStore(store)

sagaMiddleWare.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
