import React from 'react'
import { PropTypes } from 'prop-types'

import { Button } from '../stateless/button'

export const OfferComponentLeft = props => {
	const { title, p1, p2, buttonLink } = props
	return (
		<div className="col-sm-4 text-left">
			<h2>{title}</h2>
			<hr className="line-blue" />
			<p>{p1}</p>
			<p className="margin-text-servises">{p2}</p>
			{buttonLink && <Button link={buttonLink} />}
		</div>
	)
}

OfferComponentLeft.propTypes = {
	title: PropTypes.string.isRequired,
	p1: PropTypes.string,
	p2: PropTypes.string,
	buttonLink: PropTypes.string
}
