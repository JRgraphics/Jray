import React, {useRef} from 'react'

// Redux
import {useSelector, useDispatch } from 'react-redux'
import {
  fetchWeather,
  setSearchFocus,
  setSearchTerm,
  setSearchSelection,
} from '../../redux'

// Components
import SearchList from './SearchList'

// Constants
import Cities from './Cities.json'

const LocationSearch  = () => {
  const search_el = useRef(null)
  const underline_el = useRef(null)

  const dispatch = useDispatch()

  const weatherData = useSelector(state => state.weather)

  const handleClick = (e) => {
    if (
      e.target.classList[0] !== 'location-search__searchbox' &&
      e.target.classList[0] !== 'search-list__result'
    ) {
      dispatch(setSearchFocus(false))
      document.removeEventListener('mousedown', handleClick)
    }
  }

  const handleOnFocus = (e) => {
    if (underline_el.current) {
      underline_el.current.style.width = '100%'
    }
    dispatch(setSearchFocus(true))
    document.addEventListener('mousedown', handleClick)
  }

  const handleOnBlur = (e) => {
    underline_el.current.style.width = '0'
  }

  const handleOnChange = (e) => {
    //Filters the list of cities on every search input's onChange event
    dispatch(setSearchTerm(e.target.value))
    if (e.target.value.length > 2) {
      const selection = Cities.find(
        (city) =>
          city.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          city.name
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase().charAt(0)),
      )
      if (selection) {
        dispatch(setSearchSelection(selection.name))
      }
    }
  }

  const handleKeyUp = (e) => {
    //If enter is pressed while focus is on the search input,
    //weatherdata will be fetched based on the current selection
    if (e.keyCode === 13) {
      dispatch(fetchWeather(weatherData?.search_selection))
      e.target.blur()
      dispatch(setSearchFocus(false))
    }
  }

    return (
      <div className="location-search col-12 col-sm-10 col-md-4 p-0 my-3 mx-auto text-center">
        <div>
          <input
            ref={search_el}
            className="location-search__searchbox pl-4"
            type="text"
            onFocus={(e) => handleOnFocus(e)}
            onBlur={(e) => handleOnBlur(e)}
            onChange={(e) => handleOnChange(e)}
            placeholder="Search.."
            value={weatherData?.search_term}
            onKeyUp={(e) => handleKeyUp(e)}
          />
          <div
            ref={underline_el}
            className="searchbox__underline"
            style={{ width: '0' }}
          ></div>
        </div>
        {weatherData &&
          weatherData?.search_focus &&
          weatherData?.search_term?.length > 2 && <SearchList />}
      </div>
    )
}

export default LocationSearch
