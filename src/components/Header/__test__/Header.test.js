import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Header from '../Header'
import WeatherToggle from '../../WeatherToggle/WeatherToggle'

describe('Header component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('header').hasClass('header')).toBe(true)
    expect(wrapper.find('img').hasClass('header__logo')).toBe(true)
    expect(wrapper.find(WeatherToggle).exists()).toBe(true)
  })
})
