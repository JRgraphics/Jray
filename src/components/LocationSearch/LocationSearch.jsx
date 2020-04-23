import React, {useRef} from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather, setSearchFocus, setSearchTerm } from '../../redux';
import './LocationSearch.sass';
import Cities from  './Cities.json';

import search_icon from '../../assets/images/search_icon.png';
import SearchList from './SearchList';
import { render } from '@testing-library/react';

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
        this.search_el = React.createRef();
    }

    handleClick = (e) => {
        if (e.target.classList[0] !== 'location-search__searchbox' && e.target.classList[0] !== 'search-list__result' ) {
            this.props.setSearchFocus(false);
            document.removeEventListener('mousedown', this.handleClick);
        }
        console.log(e.target.classList[0]);
    }

    render() {
    return (
        <div className="location-search col-12 p-0 my-3 text-center">
            <div>
                <input ref={this.search_el} className="location-search__searchbox col-12 col-sm-10 col-md-4" type="text"
                onFocus={() => {
                    this.props.setSearchFocus(true);
                    document.addEventListener('mousedown', this.handleClick);
                }}
                onBlur={() => {}} 
                onChange={(e) => this.props.setSearchTerm(e.target.value)} 
                placeholder="Search.." value={this.props.weatherData.search_term}
                />
            </div>
            
            <SearchList />
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
        fetchWeather: (city) => dispatch(fetchWeather(city)),
        setSearchFocus: (status) => dispatch(setSearchFocus(status)),
        setSearchTerm: (value) => dispatch(setSearchTerm(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);