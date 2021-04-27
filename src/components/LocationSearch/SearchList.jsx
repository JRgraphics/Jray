import React, {useEffect} from 'react'

// Constants
import Cities from './Cities.json'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setSearchFocus, setSearchSelection } from '../../redux'

const SearchList = () => {
  const dispatch = useDispatch()
  const weatherData = useSelector(state => state.weather)

  const handleOnClick = (value) => {
    dispatch(fetchWeather(value.name))
    dispatch(setSearchFocus(false))
  }

  const handleHover = (e) => {
    //Switches city selection if the given requirements are met
    if (e.target.classList[0] === 'search-list__result') {
      dispatch(setSearchSelection(e.target.id))
    }
  }

  useEffect(() => {
    document.addEventListener('mouseover', handleHover)
    return () => {
      document.removeEventListener('mouseover', handleHover)
    }
  }, [])

    return (
      <div className="search-list col-12 p-0">
        <ul className="p-0 m-0" style={{ listStyleType: 'none' }}>
          {
            //Filtering cities from database based on the current search term
            Cities.filter(
              (city) =>
                city.name
                  .toLowerCase()
                  .includes(weatherData?.search_term?.toLowerCase()) &&
                city.name
                  .toLowerCase()
                  .startsWith(
                    weatherData?.search_term?.toLowerCase().charAt(0),
                  ),
            ).map((value, index) => (
              <li
                id={value?.name}
                key={value?.geonameid + index}
                className={
                  'search-list__result p-1 ' +
                  (value.name === weatherData?.search_selection
                    ? 'search-list__result--selected'
                    : '')
                }
                onClick={() => {
                  handleOnClick(value)
                }}
              >
                {value?.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
}

export default SearchList
