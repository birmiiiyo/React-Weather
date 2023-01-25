import createSagaMiddleware from '@redux-saga/core'
import { RenderOptions, render } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from 'store/reducers'

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
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
  )
  return <Provider store={store}>{children}</Provider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
