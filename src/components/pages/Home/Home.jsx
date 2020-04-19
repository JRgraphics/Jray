import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './Home.sass';
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel';
import CurrentForecast from '../../CurrentForecast/CurrentForecast';
import LocationSearch from '../../LocationSearch/LocationSearch';
import { geolocated } from "react-geolocated";

function Home({ weatherData, fetchWeather}) {
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
