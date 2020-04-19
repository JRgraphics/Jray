import { FETCH_WEATHER_REQUEST, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_WEATHER_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, CHANGE_TEMPERATURE } from "./weatherTypes"

const initialState = {
    loading: false,
    current_weather: {},
    weather_forecast: [],
    error: '',
    temp_type: 'C'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        
        case FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                current_weather: action.payload
            }
        
        case FETCH_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                weather_forecast: action.payload
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                weather: [],
                error: action.payload
            }

        case CHANGE_TEMPERATURE:
            return {
                ...state,
                temp_type: action.payload
            }

        default: return state;
    }
}

export default reducer;