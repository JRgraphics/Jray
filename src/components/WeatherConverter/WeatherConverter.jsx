import React from 'react';
import { connect } from 'react-redux';

function WeatherConverter(props) {
    return (
        <span>
            {
            props.weatherData.temp_type === "C" ?
            (
                Math.round((props.temperature - 273) * 10) / 10
            ) : (
                Math.round((props.temperature * 9/5 - 459.67) * 10) / 10
            )
            }<span>{props.weatherData.temp_type === "C" ? '°C' : '°F'}</span>
        </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherConverter);
