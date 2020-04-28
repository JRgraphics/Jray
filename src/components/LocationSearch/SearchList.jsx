import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather, setSearchFocus, setSearchSelection } from '../../redux'

import Cities from './Cities.json'

class SearchList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //Event which allows to switch current city selection on mouseover
    document.addEventListener('mouseover', this.handleHover)
  }

  componentWillUnmount() {
    document.removeEventListener('mouseover', this.handleHover)
  }

  handleOnClick = (value) => {
    this.props.fetchWeather(value.name)
    this.props.setSearchFocus(false)
  }

  handleHover = (e) => {
    //Switches city selection if the given requirements are met
    if (e.target.classList[0] === 'search-list__result') {
      this.props.setSearchSelection(e.target.id)
    }
  }

  render() {
    return (
      <div className="search-list col-12 p-0">
        <ul className="p-0 m-0" style={{ listStyleType: 'none' }}>
          {
            //Filtering cities from database based on the current search term
            Cities.filter(
              (city) =>
                city.name
                  .toLowerCase()
                  .includes(this.props.weatherData.search_term.toLowerCase()) &&
                city.name
                  .toLowerCase()
                  .startsWith(
                    this.props.weatherData.search_term.toLowerCase().charAt(0),
                  ),
            ).map((value, index) => (
              <li
                id={value.name}
                key={value.geonameid}
                className={
                  'search-list__result p-1 ' +
                  (value.name === this.props.weatherData.search_selection
                    ? 'search-list__result--selected'
                    : '')
                }
                onClick={(value) => {
                  this.handleOnClick(value)
                }}
              >
                {value.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city)),
    setSearchFocus: (status) => dispatch(setSearchFocus(status)),
    setSearchSelection: (value) => dispatch(setSearchSelection(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
