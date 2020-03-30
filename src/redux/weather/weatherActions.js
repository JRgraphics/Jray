import axios from 'axios';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, CHANGE_TEMPERATURE } from "./weatherTypes";

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

const fetchWeatherSuccess = weather => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather
    }
}

const fetchWeatherError = error => {
    return {
        type: FETCH_WEATHER_ERROR ,
        payload: error
    }
}

export const fetchWeather = () => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest);
        // TODO: Change to take argument
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=ca4681885056a937b5ff8c7900747249')
        .then(response => {
            const weather = response.data;
            dispatch(fetchWeatherSuccess(weather));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchWeatherError(errorMsg));
        })
    }
}


export const changeTemperature = value => {
    return {
        type: CHANGE_TEMPERATURE,
        payload: value
    }
}