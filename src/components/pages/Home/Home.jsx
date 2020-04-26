import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../../redux';
import './Home.sass';
import ForecastCarousel from '../../ForecastCarousel/ForecastCarousel';
import CurrentForecast from '../../CurrentForecast/CurrentForecast';
import LocationSearch from '../../LocationSearch/LocationSearch';
import { geolocated } from "react-geolocated";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWeather(this.props.weatherData.search_selection);
    }

    render() {
    return (
        <div className="mx-auto">
            <LocationSearch />
            <div className="col-12 mx-auto">
                <CurrentForecast />
            </div>
            <div className="col-12 my-3">
                <ForecastCarousel />
            </div>

        </div>
    )
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
