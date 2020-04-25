import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './CurrentForecast.sass';

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
                    <h1 className="m-0">
                    {
                        weatherData.temp_type === "C" ?
                        (
                            Math.round((weatherData.current_weather.main['temp'] - 273) * 10) / 10
                        ) : (
                            Math.round((weatherData.current_weather.main['temp'] * 9/5 - 459.67) * 10) / 10
                        )
                    }
                    <span>{weatherData.temp_type === "C" ? '°C' : '°F'}</span>
                    </h1>
                    <h5 className="m-0">24.4.</h5>
                    <h5 className="m-0">2:30pm</h5>
                </div>
                <div className="col-6">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-left">
                                    <h5 className="m-0">Feels like</h5>
                                </td>
                                <td className="text-right">
                                    <h5 className="m-0">
                                {
                                    weatherData.temp_type === "C" ?
                                    (
                                        Math.round((weatherData.current_weather.main['feels_like'] - 273) * 10) / 10
                                    ) : (
                                        Math.round((weatherData.current_weather.main['feels_like'] * 9/5 - 459.67) * 10) / 10
                                    )
                                }<span>{weatherData.temp_type === "C" ? '°C' : '°F'}</span>
                                </h5>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h5 className="m-0">Wind</h5>
                                </td>
                                <td className="text-right">
                                    <h5 className="m-0">{weatherData.current_weather.wind['speed']}</h5>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h5 className="m-0">Humidity</h5>
                                </td>
                                <td className="text-right">
                                    <h5 className="m-0">{weatherData.current_weather.main['humidity']}<span>%</span></h5>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h5 className="m-0">Sunrise</h5>
                                </td>
                                <td className="text-right">
                                    <h5 className="m-0">{
                                    getTime(weatherData.current_weather.sys['sunrise'])
                                    }</h5>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    <h5 className="m-0">Sunset</h5>
                                </td>
                                <td className="text-right">
                                    <h5 className="m-0">{
                                    getTime(weatherData.current_weather.sys['sunset'])
                                    }</h5>
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
