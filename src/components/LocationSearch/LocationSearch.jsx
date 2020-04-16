import React from 'react';
import './LocationSearch.sass';

import search_icon from '../../assets/images/search_icon.png';

function LocationSearch() {
    return (
        <div className="location-search col-12 p-0 my-3 text-center">
            <input className="location-search__searchbox" type="text" placeholder="Search.." />
            <button className="location-search__searchbutton"><img src={search_icon} alt={""} /></button>
        </div>
    )
}

export default LocationSearch
