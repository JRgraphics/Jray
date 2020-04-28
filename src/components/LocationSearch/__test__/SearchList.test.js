import React from 'react'
import { shallow, mount, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
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

describe('SearchList component', () => {
  it('should render without errors', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <SearchList store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    expect(wrapper.find('.search-list').exists()).toBe(true)
    expect(wrapper.find('ul').length).toBe(1)
  })

  it('should trigger appropriate store actions on handleOnClick', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <SearchList store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const value = {
      name: 'Lahti',
    }
    const expectedActions = [
      { type: types.FETCH_WEATHER_REQUEST },
      { type: types.SET_SEARCH_FOCUS, payload: false },
    ]
    wrapper.instance().handleOnClick(value)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should trigger appropriate store actions on handleHover', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(
      <SearchList store={store} weatherData={weatherData} />,
    )
      .childAt(0)
      .dive()
    const e = {
      target: {
        id: 'Lahti',
        classList: ['search-list__result'],
      },
    }
    const expectedActions = [
      { type: types.SET_SEARCH_SELECTION, payload: 'Lahti' },
    ]
    wrapper.instance().handleHover(e)
    expect(store.getActions()).toEqual(expectedActions)
  })
})
