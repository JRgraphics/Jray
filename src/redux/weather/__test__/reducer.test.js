import reducer from '../weatherReducer'
import * as types from '../weatherTypes'

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      current_weather: {},
      weather_forecast: [],
      error: '',
      temp_type: 'C',
      search_focus: false,
      search_term: 'Helsinki',
      search_selection: 'Helsinki',
    })
  })

  it('should handle FETCH_WEATHER_REQUEST', () => {
    expect(
      reducer([], {
        type: types.FETCH_WEATHER_REQUEST,
      }),
    ).toEqual({
      loading: true,
      error: '',
    })
  })

  it('should handle FETCH_CURRENT_WEATHER_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_CURRENT_WEATHER_SUCCESS,
        payload: { weather: 'initial' },
      }),
    ).toEqual({
      loading: false,
      current_weather: { weather: 'initial' },
    })
  })

  it('should handle FETCH_WEATHER_FORECAST_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_WEATHER_FORECAST_SUCCESS,
        payload: [{ weather: 'initial' }],
      }),
    ).toEqual({
      loading: false,
      weather_forecast: [{ weather: 'initial' }],
    })
  })

  it('should handle FETCH_WEATHER_ERROR', () => {
    expect(
      reducer([], {
        type: types.FETCH_WEATHER_ERROR,
        payload: 'error',
      }),
    ).toEqual({
      loading: false,
      current_weather: {},
      weather_forecast: [],
      error: 'error',
    })
  })

  it('should handle CHANGE_TEMPERATURE', () => {
    expect(
      reducer([], {
        type: types.CHANGE_TEMPERATURE,
        payload: 'F',
      }),
    ).toEqual({
      temp_type: 'F',
    })
  })

  it('should handle SET_SEARCH_FOCUS', () => {
    expect(
      reducer([], {
        type: types.SET_SEARCH_FOCUS,
        payload: true,
      }),
    ).toEqual({
      search_focus: true,
    })
  })

  it('should handle SET_SEARCH_TERM', () => {
    expect(
      reducer([], {
        type: types.SET_SEARCH_TERM,
        payload: 'test',
      }),
    ).toEqual({
      search_term: 'test',
    })
  })

  it('should handle SET_SEARCH_SELECTION', () => {
    expect(
      reducer([], {
        type: types.SET_SEARCH_SELECTION,
        payload: 'Lahti',
      }),
    ).toEqual({
      search_selection: 'Lahti',
    })
  })
})
