import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './Home.sass';
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel';
import CurrentForecast from '../../CurrentForecast/CurrentForecast';
import LocationSearch from '../../LocationSearch/LocationSearch';
import { geolocated } from "react-geolocated";

function Home() {
    return (
        <div className="mx-auto">
            <LocationSearch />
            <div className="col-6 mx-auto">
                <CurrentForecast />
            </div>
            <div className="col-12 my-3">
                <ForecastCarousel />
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
