import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../../../redux';
import './Home.sass';

function dateToString(date) {
    const d = new Date(date * 1000);
    const date_str = d.getDate() + '.' + (d.getMonth() + 1 ) + '.' + d.getFullYear();
    return date_str;
}

function timeToString(date) {
    const d = new Date(date * 1000);
    const time_str = d.getHours() + ':' + ('0'+d.getMinutes()).slice(-2);
    return time_str;
}

function Home({ weatherData, fetchWeather}) {
    useEffect(() => {
        fetchWeather()
    }, []);
    return weatherData.loading ? (
        <h2 className="lds-dual-ring"></h2>
    ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
    ) : (
        <div className="col-8 mx-auto">
            <h2 className="mx-auto text-center">Weather</h2>

            <div className="mx-auto text-center">
                {
                    weatherData &&
                    weatherData.weather &&
                    weatherData.weather.list &&
                    <div>
                        <p>{dateToString(weatherData.weather.list[0].dt)}</p>
                        <p>{timeToString(weatherData.weather.list[0].dt)}</p>  
                    </div>           
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
