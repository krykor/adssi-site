import React from 'react'
import { PropTypes } from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'

export const OfferComponent = props => {
	const { id, icon, title, text } = props
	return (
		<div id={id} className="col-sm-6 servises">
			<Fade bottom>
				<FontAwesomeIcon icon={icon} size="4x" className="text-primary" />
			</Fade>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	)
}

OfferComponent.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	divClass: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
}
