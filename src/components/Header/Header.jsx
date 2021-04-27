import React from 'react'

// Assets
import Jray_logo from '../../assets/images/Jray_logo.png'

// Components
import WeatherToggle from '../WeatherToggle/WeatherToggle'

const Header = () => {
  return (
    <header className="header justify-content-between px-2">
      <img className="header__logo" src={Jray_logo} alt={'logo'} />
      <WeatherToggle style={{ float: 'right' }} />
    </header>
  )
}

export default Header
