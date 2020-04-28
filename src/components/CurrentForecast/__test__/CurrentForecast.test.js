import React from 'react'
import { shallow, mount, render } from 'enzyme'
import CurrentForecast from '../CurrentForecast'
import configureStore from 'redux-mock-store'
import WeatherInfoTable from '../WeatherInfoTable'
import WeatherThumbnail from '../../WeatherThumbnail/WeatherThumbnail'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  weather: {
    loading: false,
    current_weather: {
      dt: 123,
      main: 'something',
      weather: [{ icon: 'asd' }],
      wind: {
        speed: 1,
        deg: 0,
      },
      sys: {
        sunrise: 123,
        sunset: 123,
      },
    },
    weather_forecast: [],
    error: '',
    temp_type: 'C',
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
      <CurrentForecast store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    expect(wrapper.find('.current-forecast').exists()).toBe(true)
    expect(wrapper.find(WeatherThumbnail).exists()).toBe(true)
    expect(wrapper.find(WeatherInfoTable).exists()).toBe(true)
  })
})
