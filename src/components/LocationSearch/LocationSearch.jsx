import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, setSearchFocus, setSearchTerm, setSearchSelection } from '../../redux';
import './LocationSearch.sass';
import Cities from  './Cities.json';

import SearchList from './SearchList';

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
        this.search_el = React.createRef();
        this.underline_el = React.createRef();
    }

    handleClick = (e) => {
        if (e.target.classList[0] !== 'location-search__searchbox' && e.target.classList[0] !== 'search-list__result' ) {
            this.props.setSearchFocus(false);
            document.removeEventListener('mousedown', this.handleClick);
        }
        console.log(e.target.classList[0]);
    }

    handleOnChange = (e) =>  {
        this.props.setSearchTerm(e.target.value);
        if ( e.target.value.length > 2 ) {
            const selection = Cities.find(city => (city.name.toLowerCase().includes(e.target.value.toLowerCase())) && city.name.toLowerCase().startsWith(e.target.value.toLowerCase().charAt(0)));
            this.props.setSearchSelection(selection.name)
        }
    }

    handleKeyUp = (e) => {
        if ( e.keyCode === 13 ) {
            this.props.fetchWeather(this.props.weatherData.search_selection);
            e.target.blur();
            this.props.setSearchFocus(false);
        }
    }

    render() {
    return (
        <div className="location-search col-12 col-sm-10 col-md-4 p-0 my-3 mx-auto text-center">
            <div>
                <input ref={this.search_el} className="location-search__searchbox" type="text"
                onFocus={() => {
                    this.underline_el.current.style.width = '100%';
                    this.props.setSearchFocus(true);
                    document.addEventListener('mousedown', this.handleClick);
                }}
                onBlur={() => {
                    this.underline_el.current.style.width = '0';
                }} 
                onChange={(e) => this.handleOnChange(e)}
                placeholder="Search.." value={this.props.weatherData.search_term}
                onKeyUp={(e) => this.handleKeyUp(e)}
                />
                <div ref={this.underline_el} className="searchbox__underline" style={{width: '0'}}></div>
            </div>
            {
                this.props.weatherData &&
                this.props.weatherData.search_focus &&
                this.props.weatherData.search_term.length > 2 &&
                <SearchList />
            }
            
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
        setSearchTerm: (value) => dispatch(setSearchTerm(value)),
        setSearchSelection: (value) => dispatch(setSearchSelection(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);