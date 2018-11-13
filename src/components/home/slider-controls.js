import React from 'react'
import { PropTypes } from 'prop-types'

export const SliderControls = props => {
	const { control } = props
	return (
		<a
			className={`${control === 'Next' ? 'right' : 'left'} carousel-control `}
			href="#myCarousel"
			role="button"
			data-slide={control === 'Next' ? 'next' : 'prev'}
		>
			<span
				className={`glyphicon glyphicon-chevron-${control === 'Next' ? 'right' : 'left'}`}
				aria-hidden="true"
			/>

			<span className="sr-only">{control}</span>
		</a>
	)
}

SliderControls.propTypes = {
	control: PropTypes.string.isRequired
}
