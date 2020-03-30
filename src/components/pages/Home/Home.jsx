import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather, changeTemperature } from '../../../redux';
import './Home.sass';

function Home({ weatherData, fetchWeather}) {
    useEffect(() => {
        fetchWeather()
    }, []);
    const dispatch = useDispatch();
    return weatherData.loading ? (
        <h2 className="lds-dual-ring"></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
        <div className="col-8 mx-auto">
            <h2 className="mx-auto text-center">Weather</h2>
            
            <div className="weather-toggle">
                <button onClick={() => dispatch(changeTemperature("C"))} className={"btn " + (weatherData.temp_type === "C" ? "btn-primary" : 'btn-outline-primary')}>°C</button>
                <button onClick={() => dispatch(changeTemperature("F"))} className={"btn " + (weatherData.temp_type === "F" ? "btn-primary" : 'btn-outline-primary')}>°F</button>
            </div>

            <div className="mx-auto text-center">
                {
                    weatherData &&
                    weatherData.weather &&
                    weatherData.weather.weather &&
                    <p>{weatherData.weather.weather[0].main}</p>          
                }
            </div>
            <table className="mx-auto px-0 text-center col-6">
                <tbody>

                
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                {
                weatherData &&
                weatherData.weather &&
                weatherData.weather.main &&
                Object.keys(weatherData.weather.main).map(key => (
                    key === 'temp' || key === 'feels_like' || key === 'temp_min' || key === 'temp_max' ?
                    (
                        <tr>
                            <td>{key}</td>
                            <td id={key} key={key} className="">
                            {
                                weatherData.temp_type === "C" ?
                                (
                                    weatherData.weather.main[key] - 273
                                ) : (
                                    weatherData.weather.main[key] * 9/5 - 459.67
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
                        weatherData.weather.main[key]
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
