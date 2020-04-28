import React from 'react'
import { shallow, mount, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import ForecastCarousel from '../ForecastCarousel'
import ForecastCarouselItem from '../ForecastCarouselItem'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {
  weather: {
    loading: false,
    current_weather: {},
    weather_forecast: {
      list: [
        {
          dt: 123,
          main: { data: 'test' },
          weather: { data: 'test' },
        },
      ],
    },
    error: '',
    temp_type: 'C',
    search_focus: false,
    search_term: 'Helsinki',
    search_selection: 'Helsinki',
  },
}

describe('ForecastCarousel component', () => {
  it('should render without errors', () => {
    const weatherData = {
      loading: false,
      error: '',
    }
    const store = mockStore(initialState)

    const wrapper = shallow(
      <ForecastCarousel store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    expect(wrapper.find('.forecast-carousel').exists()).toBe(true)
    expect(wrapper.find(ForecastCarouselItem).exists()).toBe(true)
  })
})
