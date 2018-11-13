import React from 'react'
import { PropTypes } from 'prop-types'

export const OurClientsLogo = ({ ourClients }) => {
	const { src, id } = ourClients
	return (
		<div className="col-sm-3 logo">
			<img src={src} id={id} alt={id} title={id} />
		</div>
	)
}

OurClientsLogo.propTypes = {
	ourClients: PropTypes.shape({
		src: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	})
}
