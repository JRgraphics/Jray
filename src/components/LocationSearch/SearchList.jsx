import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux';

import Cities from  './Cities.json';

function SearchList({weatherData, fetchWeather}) {
    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                {
                    weatherData &&
                    weatherData.search_focus &&
                    weatherData.search_term.length > 2 &&
                    Cities.filter(city => city.name.toLowerCase().includes(weatherData.search_term.toLowerCase())).map((value, index) =>
                    <li key={value.geonameid} className="search-list__result" onClick={() => fetchWeather(value.name)}>{value.name}</li>
                    )
                }
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
