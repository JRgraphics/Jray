import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTemperature } from '../../redux';
import './WeatherToggle.sass';

function WeatherToggle({weatherData}) {

    const dispatch = useDispatch();
    return (
        <div className="weather-toggle">
            <button onClick={() => dispatch(changeTemperature("C"))} className={"btn " + (weatherData.temp_type === "C" ? "btn-primary" : 'btn-outline-primary')}>°C</button>
            <button onClick={() => dispatch(changeTemperature("F"))} className={"btn " + (weatherData.temp_type === "F" ? "btn-primary" : 'btn-outline-primary')}>°F</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToggle);
