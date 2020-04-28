import React from 'react'
import { shallow, mount, render } from 'enzyme'
import WeatherThumbnail from '../../WeatherThumbnail/WeatherThumbnail'

describe('CurrentForecast component', () => {
  it('should render without errors', () => {
    const props = {
      parent: 'test',
      temperature: 0,
      time: 123,
      icon: 'abc',
      description: 'default',
    }
    const wrapper = shallow(<WeatherThumbnail {...props} />)
    expect(wrapper.find('.test-thumbnail').exists()).toBe(true)
  })
})
