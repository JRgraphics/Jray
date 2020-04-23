import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather, setSearchFocus } from '../../redux';

import Cities from  './Cities.json';

function SearchList({weatherData, fetchWeather, setSearchFocus}) {
    const dispatch = useDispatch();
    return (
        weatherData &&
        weatherData.search_focus &&
        weatherData.search_term.length > 2 &&
        <div className="search-list col-12 col-sm-10 col-md-4">
            <ul className="p-1 m-0" style={{listStyleType: "none"}}>
                {
                    Cities.filter(city => city.name.toLowerCase().includes(weatherData.search_term.toLowerCase())).map((value, index) =>
                    <li key={value.geonameid} className="search-list__result" 
                    onClick={() => {
                        fetchWeather(value.name);
                        setSearchFocus(false);
                    }}>{value.name}</li>
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
        fetchWeather: (city) => dispatch(fetchWeather(city)),
        setSearchFocus: (status) => dispatch(setSearchFocus(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
