import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../../../redux';
import './Home.sass';
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel';
import CurrentForecast from '../../CurrentForecast/CurrentForecast';

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
        <div className="mx-auto">
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
            <div className="row col-12 m-0 p-0">
                <div className="col-6 m-0 p-0">
                <CurrentForecast />
                </div>
                <div className="col-6 m-0 p-0">
                <ForecastCarousel />
                </div>
            </div>
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
