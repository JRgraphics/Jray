import React from 'react'
import { shallow, mount, render } from 'enzyme'
import ForecastCarouselItem from '../ForecastCarouselItem'
import WeatherThumbnail from '../../WeatherThumbnail/WeatherThumbnail'

const props = {
  main: {
    temp: 1,
  },
  time: 123,
  weather: [
    {
      icon: 'abc',
      description: 'test',
    },
  ],
}

describe('ForecastCarouselItem component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ForecastCarouselItem {...props} />)
    expect(wrapper.find('.carousel__item').exists()).toBe(true)
    expect(wrapper.find(WeatherThumbnail).exists()).toBe(true)
  })
})
