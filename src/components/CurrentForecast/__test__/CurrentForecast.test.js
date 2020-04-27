import React from 'react'
import { shallow, mount, render } from 'enzyme'
import CurrentForecast from '../CurrentForecast'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('CurrentForecast component', () => {
  it('Should render without errors', () => {})
  const initialState = {
    weather: {
      loading: false,
      error: '',
    },
  }
  const weatherData = {
    loading: false,
    error: '',
  }
  const store = mockStore(initialState)

  const wrapper = shallow(
    <CurrentForecast store={store} weatherData={weatherData} />,
  )
    .childAt(0)
    .dive()
  expect(wrapper.find('div').hasClass('current-forecast')).toBe(true)
})
