import React from 'react'
import { PropTypes } from 'prop-types'

export const PortfolioButton = props => {
	const { index, buttonLength, handleClick, button } = props
	return (
		<div
			className={`col-lg-2 col text-center ${
				index === 0 ? `col-lg-offset-1 col-sm-3` : index === buttonLength ? `col-sm-12` : `col-sm-3`
			}`}
		>
			<button
				type="button"
				className={`btn btn-primary`}
				onClick={() => handleClick(button.filter)}
			>
				{button.text}
			</button>
		</div>
	)
}

PortfolioButton.propTypes = {
	index: PropTypes.number.isRequired,
	buttonLength: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired,
	button: PropTypes.shape({
		filter: PropTypes.string,
		text: PropTypes.string.isRequired
	})
}
