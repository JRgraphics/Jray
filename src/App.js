import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import Home from './components/pages/Home/Home'
import Header from './components/Header/Header'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App
