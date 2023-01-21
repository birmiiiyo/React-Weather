import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from '@store/reducers/index'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['calendar', 'location', 'hourlyWeather'],
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const sagaMiddleWare = createSagaMiddleware()

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  )
  return <Provider store={store}>{children}</Provider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
