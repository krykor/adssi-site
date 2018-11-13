import React from 'react'
import { PropTypes } from 'prop-types'

export const SliderImg = props => {
	const { src, srcSet, alt } = props.slide
	return <img src={src} width="1920" srcSet={srcSet} alt={alt} />
}

SliderImg.propTypes = {
	slide: PropTypes.objectOf(PropTypes.string)
}
