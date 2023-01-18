import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { Loader } from '@components/Loader'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>
)
