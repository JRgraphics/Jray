import React from 'react'
import { shallow, mount, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import * as types from '../../../redux/weather/weatherTypes'
import * as actions from '../../../redux/weather/weatherActions'
import WeatherToggle from '../WeatherToggle'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  weather: {
    loading: false,
    current_weather: {},
    weather_forecast: [],
    error: '',
    temp_type: 'F',
    search_focus: false,
    search_term: 'Helsinki',
    search_selection: 'Helsinki',
  },
}

describe('CurrentForecast component', () => {
  it('should render without errors', () => {
    const weatherData = {
      loading: false,
      error: '',
    }
    const store = mockStore(initialState)

    const wrapper = shallow(
      <WeatherToggle store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    expect(wrapper.find('.weather-toggle').exists()).toBe(true)
    expect(wrapper.find('.celcius').exists()).toBe(true)
    expect(wrapper.find('.fahrenheit').exists()).toBe(true)
  })

  it('should trigger appropriate store actions on button click', () => {
    const weatherData = {
      loading: false,
      error: '',
    }
    let store = mockStore(initialState)

    const wrapper = shallow(
      <WeatherToggle store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    let expectedActions = [{ type: types.CHANGE_TEMPERATURE, payload: 'C' }]
    wrapper.find('.celcius').simulate('click')
    expect(store.getActions()).toEqual(expectedActions)
  })
})
