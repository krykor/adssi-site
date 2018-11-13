import React from 'react'

import { Slider } from './slider'
import { OfferHome } from './offer-home'
import { OurWorks } from './our-works'
import { OurClients } from './our-clients'

export const Home = () => {
	return (
		<div>
			<Slider />
			<OfferHome />
			<OurWorks />
			<OurClients />
		</div>
	)
}
