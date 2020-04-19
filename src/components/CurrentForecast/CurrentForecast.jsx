import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../redux';
import './CurrentForecast.sass';

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
        
            <table className="mx-auto px-0 text-center col-6">
                <tbody>

                
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                {
                Object.keys(weatherData.current_weather.main).map(key => (
                    key === 'temp' || key === 'feels_like' || key === 'temp_min' || key === 'temp_max' ?
                    (
                        <tr>
                            <td>{key}</td>
                            <td id={key} key={key} className="">
                            {
                                weatherData.temp_type === "C" ?
                                (
                                    Math.round((weatherData.current_weather.main[key] - 273) * 10) / 10
                                ) : (
                                    Math.round((weatherData.current_weather.main[key] * 9/5 - 459.67) * 10) / 10
                                )
                            }
                            </td>
                        </tr>
                    )
                : (
                    <tr>
                        <td>{key}</td>
                        <td id={key} key={key} className="">
                        {
                        weatherData.current_weather.main[key]
                        }
                        </td>
                    </tr>
                )
                )
                )
                }
                </tbody>
            </table>
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
        fetchWeather: (city) => dispatch(fetchWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);
