import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './CurrentForecast.sass';
import WeatherConverter from '../WeatherConverter/WeatherConverter';
import WeatherIconMap from '../WeatherIconMap.json';
import { dateToString, timeToString } from '../DateFormatFunctions';
import WeatherInfoTable from './WeatherInfoTable';


function CurrentForecast({ weatherData }) {
    
    return weatherData.loading ? (
        <h2 className="lds-dual-ring centered" ></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
        <div className="current-forecast">
            {
            weatherData &&
            weatherData.current_weather &&
            weatherData.current_weather.main &&
            <div className="row col-12 mx-auto px-0 text-center">
                <div className="col-6 text-right">
                    <div>
                        <div className="height--50">
                            <h1 className="main-temperature m-0">
                                <WeatherConverter temperature={weatherData.current_weather.main['temp']} />
                            </h1>
                        </div>
                        <div className="height--50">
                            <div className="time-container float-right pb-1">
                                <h6 className="m-0 pr-1">{dateToString(weatherData.current_weather.dt)}</h6>
                                <h6 className="m-0 pr-1">{timeToString(weatherData.current_weather.dt)}</h6>
                            </div>
                            <i class={"wi " + (WeatherIconMap[(weatherData.current_weather.weather[0].icon)]) + " wi-fw"}></i>
                            <h6>{weatherData.current_weather.weather[0].description}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <WeatherInfoTable object={
                        [
                            {
                                "label": "Feels like",
                                "value": <WeatherConverter temperature={weatherData.current_weather.main['feels_like']} />
                            },
                            {
                                "label": "Wind",
                                "value": weatherData.current_weather.wind['speed']
                            },
                            {
                                "label": "Humidity",
                                "value": weatherData.current_weather.main['humidity'] + "%"
                            },
                            {
                                "label": "Sunrise",
                                "value": timeToString(weatherData.current_weather.sys['sunrise'])
                            },
                            {
                                "label": "Sunset",
                                "value": timeToString(weatherData.current_weather.sys['sunset'])
                            }
                        ]
                    } />
                </div>
            </div>
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);
