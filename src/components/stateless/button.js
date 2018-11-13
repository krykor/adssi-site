import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export const Button = props => {
	const { link, text, textAlign, buttonClass, grid } = props
	return (
		<div className={`${grid} ${textAlign}`}>
			<Link to={link}>
				<button type="button" className={`btn btn-primary ${buttonClass ? buttonClass : ''}`}>
					{text}
				</button>
			</Link>
		</div>
	)
}

Button.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	textAlign: PropTypes.string,
	buttonClass: PropTypes.string,
	grid: PropTypes.string
}
Button.defaultProps = {
	text: 'Więcej',
	textAlign: 'text-center',
	grid: 'col-sm-12'
}
