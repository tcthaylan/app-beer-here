import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Store } from './store/index'

import './config/ReactotronConfig'

import Routes from './routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Provider store={Store}>
        <Routes/>
      </Provider>
    </>
  );
}