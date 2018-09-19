import React from 'react'
import { PropTypes } from 'prop-types';

export const SliderImg = (props) => {
    return (
        <img src={props.slide.src} width="1920" srcSet={props.slide.srcSet} alt="props.slide.alt"/>
    )
}

SliderImg.propTypes = {
    slide: PropTypes.objectOf(PropTypes.string),
};