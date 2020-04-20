import React, {useRef} from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather, setSearchFocus, setSearchTerm } from '../../redux';
import './LocationSearch.sass';
import Cities from  './Cities.json';

import search_icon from '../../assets/images/search_icon.png';
import SearchList from './SearchList';

function LocationSearch({weatherData, fetchWeather}) {
    const search_el = useRef(null);
    const dispatch = useDispatch();
    return (
        <div className="location-search col-12 p-0 my-3 text-center">
            <div>
                <input ref={search_el} className="location-search__searchbox" type="text" onFocus={() => dispatch(setSearchFocus(true))}
                onBlur={() => {}} onChange={(e) => dispatch(setSearchTerm(e.target.value))} placeholder="Search.." value={weatherData.search_term} />
                <button className="location-search__searchbutton" onClick={() => {
                    fetchWeather(search_el.current.value);
                    }}><img src={search_icon} alt={""} /></button>
            </div>
            
            <SearchList />
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);