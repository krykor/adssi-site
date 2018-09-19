import React from 'react'
import { PropTypes } from 'prop-types';

export const SliderControls = (props) => {
    return (
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">{props.control}</span>
        </a>
    )
}

SliderControls.propTypes = {
    control: PropTypes.string.isRequired,
};