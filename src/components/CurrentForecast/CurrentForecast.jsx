import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../redux';
import './CurrentForecast.sass';

function CurrentForecast({ weatherData, fetchWeather}) {
    useEffect(() => {
        fetchWeather()
    }, []);
    return weatherData.loading ? (
        <h2 className="lds-dual-ring"></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
        <div className="current-forecast">
            <div>{Date(1586968225 * 1000)}</div>
            <table className="mx-auto px-0 text-center col-6">
                <tbody>

                
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                {
                weatherData &&
                weatherData.weather &&
                weatherData.weather.list &&
                Object.keys(weatherData.weather.list[0].main).map(key => (
                    key === 'temp' || key === 'feels_like' || key === 'temp_min' || key === 'temp_max' ?
                    (
                        <tr>
                            <td>{key}</td>
                            <td id={key} key={key} className="">
                            {
                                weatherData.temp_type === "C" ?
                                (
                                    Math.round((weatherData.weather.list[0].main[key] - 273) * 10) / 10
                                ) : (
                                    Math.round((weatherData.weather.list[0].main[key] * 9/5 - 459.67) * 10) / 10
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
                        weatherData.weather.list[0].main[key]
                        }
                        </td>
                    </tr>
                )
                )
                )
                }
                </tbody>
            </table>
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
        fetchWeather: () => dispatch(fetchWeather())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);
