import React from 'react'
import { shallow, mount, render } from 'enzyme'
import WeatherInfoTable from '../WeatherInfoTable'

const object = [
  {
    label: 'test_label_1',
    value: 'test_value_1',
  },
  {
    label: 'test_label_2',
    value: 'test_value_2',
  },
]

describe('WeatherInfoTable component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<WeatherInfoTable object={object} />)
    expect(wrapper.find('.weather-info-table').exists()).toBe(true)
    expect(wrapper.find('WeatherInfoTableItem').exists()).toBe(true)
  })
})
