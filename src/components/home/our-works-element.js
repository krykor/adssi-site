import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade'

export const OurWorksElement = props => {
	const { group, id, client, category, src, imgAlt } = props
	return (
		<Fade bottom>
			<div className={`col-sm-4 portfolio-item sr3 ${group}`}>
				<Link to={`/portfolio/${id}`} className="portfolio-link" id={id}>
					<div className="caption">
						<div className="caption-content">
							<h3>{client}</h3>
							<p>{category.toUpperCase()}</p>
						</div>
					</div>
					<img src={src} className="img-responsive" alt={imgAlt} />
				</Link>
			</div>
		</Fade>
	)
}

OurWorksElement.propTypes = {
	group: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	client: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired
}
