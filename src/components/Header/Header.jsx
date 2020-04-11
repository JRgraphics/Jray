import React from 'react';
import './Header.sass';
import WeatherToggle from '../WeatherToggle/WeatherToggle';

import Jray_logo from '../../assets/images/Jray_logo.png';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Jray_logo} alt={"logo"} />
            <WeatherToggle />
        </header>
    )
}

export default Header
