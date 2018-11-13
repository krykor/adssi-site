import React from 'react'

export const SliderIndicators = () => {
	return (
		<ol className="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" className="active" />
			<li data-target="#myCarousel" data-slide-to="1" />
		</ol>
	)
}
