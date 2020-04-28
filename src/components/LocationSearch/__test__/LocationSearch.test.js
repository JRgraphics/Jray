import React, { createElement } from 'react'
import { shallow, mount, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import LocationSearch from '../LocationSearch'
import * as types from '../../../redux/weather/weatherTypes'
import * as actions from '../../../redux/weather/weatherActions'
import SearchList from '../SearchList'

const mockStore = configureStore([thunk])
const initialState = {
  weather: {
    loading: false,
    current_weather: {},
    weather_forecast: [],
    error: '',
    temp_type: 'C',
    search_focus: true,
    search_term: 'Helsinki',
    search_selection: 'Helsinki',
  },
}

const weatherData = {
  loading: false,
  error: '',
}

describe('LocationSearch component', () => {
  it('should render without errors', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    expect(wrapper.find('.location-search').exists()).toBe(true)
    expect(wrapper.find('input').length).toBe(1)
    // Renders child component with current initialState values
    expect(wrapper.find(SearchList).exists()).toBe(true)
  })

  it('should trigger handleOnFocus on input element onFocus', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const input = wrapper.find('input')
    const spy = jest
      .spyOn(wrapper.instance(), 'handleOnFocus')
      .mockImplementation()
    input.simulate('focus')
    expect(spy).toHaveBeenCalled()
  })

  it('should trigger handleOnBlur on input element onBlur', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const input = wrapper.find('input')
    const spy = jest
      .spyOn(wrapper.instance(), 'handleOnBlur')
      .mockImplementation()
    input.simulate('blur')
    expect(spy).toHaveBeenCalled()
  })

  it('should trigger handleOnChange on input element onChange', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const input = wrapper.find('input')
    const spy = jest
      .spyOn(wrapper.instance(), 'handleOnChange')
      .mockImplementation()
    input.simulate('change')
    expect(spy).toHaveBeenCalled()
  })

  it('should trigger handleKeyUp on input element keyUp', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const input = wrapper.find('input')
    const spy = jest
      .spyOn(wrapper.instance(), 'handleKeyUp')
      .mockImplementation()
    input.simulate('keyup')
    expect(spy).toHaveBeenCalled()
  })

  it('should trigger appropriate store actions on handleClick', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const mock_input = document.createElement('textarea')
    const e = {
      target: mock_input,
    }
    const expectedActions = [{ type: types.SET_SEARCH_FOCUS, payload: false }]
    wrapper.instance().handleClick(e)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should trigger appropriate store actions on handleOnFocus', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const mock_input = document.createElement('textarea')
    const e = {
      target: mock_input,
    }
    const expectedActions = [{ type: types.SET_SEARCH_FOCUS, payload: true }]
    wrapper.instance().handleOnFocus(e)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should trigger appropriate store actions on handleOnChange', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const mock_input = document.createElement('textarea')
    mock_input.value = 'Helsinki'
    const e = {
      target: mock_input,
    }
    const expectedActions = [
      { type: types.SET_SEARCH_TERM, payload: 'Helsinki' },
      { type: types.SET_SEARCH_SELECTION, payload: 'Helsinki' },
    ]
    wrapper.instance().handleOnChange(e)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should trigger appropriate store actions on input element keyUp when keyCode is 13 (enter)', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <LocationSearch store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const mock_input = document.createElement('textarea')
    const e = {
      keyCode: 13,
      target: mock_input,
    }
    const expectedActions = [
      { type: types.FETCH_WEATHER_REQUEST },
      { type: types.SET_SEARCH_FOCUS, payload: false },
    ]
    wrapper.instance().handleKeyUp(e)
    expect(store.getActions()).toEqual(expectedActions)
  })
})
