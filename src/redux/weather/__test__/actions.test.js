import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../weatherTypes'
import * as actions from '../weatherActions'

jest.mock('../../store.js')

describe('async actions', () => {
  it('creates SET_CURRENT_USER when signup action is successful', async () => {
    const middlewares = [thunk]

    const mockStore = configureMockStore(middlewares)
    const store = mockStore()
    const mockData = {
      data: 'data',
    }
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData }),
    )
    const expectedActions = [{ type: types.FETCH_WEATHER_REQUEST }]
    await store.dispatch(actions.fetchWeather())
    expect(store.getActions()).toEqual(expectedActions)
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  })
})

describe('actions', () => {
  it('should change temperature format based on payload', () => {
    const payload = 'F'
    const expectedAction = {
      type: types.CHANGE_TEMPERATURE,
      payload,
    }
    expect(actions.changeTemperature(payload)).toEqual(expectedAction)
  })

  it('should change search_focus true or false based on payload', () => {
    const payload = true
    const expectedAction = {
      type: types.SET_SEARCH_FOCUS,
      payload,
    }
    expect(actions.setSearchFocus(payload)).toEqual(expectedAction)
  })

  it('should change search_term based on payload', () => {
    const payload = 'Lahti'
    const expectedAction = {
      type: types.SET_SEARCH_TERM,
      payload,
    }
    expect(actions.setSearchTerm(payload)).toEqual(expectedAction)
  })

  it('should change search_selection based on payload', () => {
    const payload = 'Tampere'
    const expectedAction = {
      type: types.SET_SEARCH_SELECTION,
      payload,
    }
    expect(actions.setSearchSelection(payload)).toEqual(expectedAction)
  })
})
