import React from 'react'
import { PropTypes } from 'prop-types';

export const SliderControls = (props) => {
    return (
        <a 
            className={`${props.control === 'Next' ? 'right' : 'left'} carousel-control `} 
            href="#myCarousel" 
            role="button" 
            data-slide={props.control === 'Next' ? 'next' : 'prev'}>

                <span className={`glyphicon glyphicon-chevron-${props.control === 'Next' ? 'right' : 'left'}`} aria-hidden="true"></span> 
                
                <span className="sr-only">{props.control}</span>
        </a>
    )
}

SliderControls.propTypes = {
    control: PropTypes.string.isRequired,
};