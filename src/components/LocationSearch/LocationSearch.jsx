import React, {useRef} from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux';
import './LocationSearch.sass';

import search_icon from '../../assets/images/search_icon.png';


function LocationSearch({fetchWeather}) {
    const search_el = useRef(null);
    const dispatch = useDispatch();
    return (
        <div className="location-search col-12 p-0 my-3 text-center">
            <input ref={search_el} className="location-search__searchbox" type="text" placeholder="Search.." defaultValue="Helsinki" />
            <button className="location-search__searchbutton" onClick={() => {
                fetchWeather(search_el.current.value);
                }}><img src={search_icon} alt={""} /></button>
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
        fetchWeather: (city) => dispatch(fetchWeather('q=' + city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);