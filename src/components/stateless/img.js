import React from 'react'
import { PropTypes } from 'prop-types'

export const Img = props => {
	const { src, imgAlt, imgClass } = props
	return (
		<div className={`col-md-${imgClass}`}>
			<p>
				<img src={src} width="100%" alt={imgAlt} title={imgAlt} />
			</p>
		</div>
	)
}
Img.propTypes = {
	src: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	imgClass: PropTypes.string
}
Img.defaultProps = {
	imgClass: '12'
}
