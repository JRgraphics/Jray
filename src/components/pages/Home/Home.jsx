import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../../../redux';
import './Home.sass';
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel';
import CurrentForecast from '../../CurrentForecast/CurrentForecast';
import LocationSearch from '../../LocationSearch/LocationSearch';

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
    return (
        <div className="mx-auto">
            <h2 className="mx-auto text-center">Weather</h2>
            <LocationSearch />
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
