import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './store/index'
import Routes from './routes'

export default function App() {
  return (
    <Provider store={Store}>
      <Routes/>
    </Provider>
  );
}