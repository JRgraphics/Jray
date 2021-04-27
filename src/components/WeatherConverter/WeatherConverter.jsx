import React from 'react';
import { useSelector } from 'react-redux';

const WeatherConverter = ({temperature= 0}) => {
    const weatherData = useSelector(state => state.weather)
    return (
        <span>
            {
            weatherData?.temp_type === "C" ?
            (
                Math.round((temperature - 273) * 10) / 10
            ) : (
                Math.round((temperature * 9/5 - 459.67) * 10) / 10
            )
            }<span>{weatherData?.temp_type === "C" ? '°C' : '°F'}</span>
        </span>
    )
}

export default WeatherConverter
