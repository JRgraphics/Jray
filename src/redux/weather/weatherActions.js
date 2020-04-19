import axios from 'axios';
import { FETCH_WEATHER_REQUEST, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_WEATHER_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, CHANGE_TEMPERATURE } from "./weatherTypes";

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

const fetchCurrentWeatherSuccess = weather => {
    return {
        type: FETCH_CURRENT_WEATHER_SUCCESS,
        payload: weather
    }
}

const fetchWeatherForecastSuccess = weather => {
    return {
        type: FETCH_WEATHER_FORECAST_SUCCESS,
        payload: weather
    }
}

const fetchWeatherError = error => {
    return {
        type: FETCH_WEATHER_ERROR ,
        payload: error
    }
}

export const fetchWeather = city => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        // Fetching the current weatherdata from the API
        axios.get('http://api.openweathermap.org/data/2.5/weather?' + city + '&APPID=ca4681885056a937b5ff8c7900747249')
        .then(response => {
            // Fetching the 5 day forecast based on the parameter and success of the current weather request
            const current_weather = response.data
            axios.get('http://api.openweathermap.org/data/2.5/forecast?' + city +'&appid=ca4681885056a937b5ff8c7900747249')
            .then(response => {
                const weather_forecast = response.data;
                dispatch(fetchCurrentWeatherSuccess(current_weather));
                dispatch(fetchWeatherForecastSuccess(weather_forecast));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchWeatherError(errorMsg));
            })
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