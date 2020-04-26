import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './CurrentForecast.sass';
import WeatherConverter from '../WeatherConverter/WeatherConverter';

const getTime = (date) => {
    const date_val = new Date(date * 1000);
    return (date_val.getHours() + ':' + ('0'+date_val.getMinutes()).slice(-2))
}

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
                    <div className="height--50">
                        <h1 className="main-temperature m-0">
                            <WeatherConverter temperature={weatherData.current_weather.main['temp']} />
                        </h1>
                    </div>
                    <div className="height--50">
                        <div className="current-forecast__time-container float-right pb-1">
                            <h6 className="m-0">24.4.</h6>
                            <h6 className="m-0">2:30pm</h6>
                        </div>
                        <i class="wi wi-night-rain wi-fw"></i>
                    </div>
                </div>
                <div className="col-6">
                    <table className="weather-info-table">
                        <tbody>
                            <tr>
                                <td className="text-left">
                                    <h6 className="m-0">Feels like</h6>
                                </td>
                                <td className="text-right">
                                    <h6 className="m-0">
                                        <WeatherConverter temperature={weatherData.current_weather.main['feels_like']} />
                                    </h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h6 className="m-0">Wind</h6>
                                </td>
                                <td className="text-right">
                                    <h6 className="m-0">{weatherData.current_weather.wind['speed']}</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h6 className="m-0">Humidity</h6>
                                </td>
                                <td className="text-right">
                                    <h6 className="m-0">{weatherData.current_weather.main['humidity']}<span>%</span></h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h6 className="m-0">Sunrise</h6>
                                </td>
                                <td className="text-right">
                                    <h6 className="m-0">{
                                    getTime(weatherData.current_weather.sys['sunrise'])
                                    }</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h6 className="m-0">Sunset</h6>
                                </td>
                                <td className="text-right">
                                    <h6 className="m-0">{
                                    getTime(weatherData.current_weather.sys['sunset'])
                                    }</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
