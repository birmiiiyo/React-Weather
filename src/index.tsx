import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Loader } from 'components/Loader'
import { persistor, store } from 'store'

import App from './App'
import GlobalStyle from './styles/global'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
)
