import React from 'react'
import { shallow, mount, render } from 'enzyme'
import WeatherInfoTableItem from '../WeatherInfoTableItem'

const item = {
  label: 'test_label_1',
  value: 'test_value_1',
}

const item_wind = {
  label: 'Wind',
  value: 'test_value_1',
  degree: 1,
}

describe('WeatherInfoTableItem component', () => {
  it('should render without errors', () => {
    let wrapper
    wrapper = shallow(<WeatherInfoTableItem item={item} />)
    expect(wrapper.find('td').exists()).toBe(true)
    expect(wrapper.find('td').length).toEqual(2)
    //item doesn't have label value of "Wind"
    expect(wrapper.find('img').exists()).toBe(false)

    wrapper = shallow(<WeatherInfoTableItem item={item_wind} />)
    //item has label value of "Wind", which renders wind degree icon in DOM
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
