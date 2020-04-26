import React from 'react';

import arrow_left from '../../assets/images/arrow_left.png';
import arrow_right from '../../assets/images/arrow_right.png';

function ButtonGroup({ next, previous, goToSlide, ...rest }) {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group" style={{position: "absolute"}}>
        <button className={'carousel-button-group__button p-2 ' + (currentSlide === 0 ? 'disable opacity--zero' : '')} onClick={() => previous()} >
          <img src={arrow_left} alt={"arrow"} />
        </button>
        <button className="carousel-button-group__button p-2  " onClick={() => next()} >
          <img src={arrow_right} alt={"arrow"} />
        </button>
      </div>
    );
  };

export default ButtonGroup
