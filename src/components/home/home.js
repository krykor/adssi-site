import React from 'react'

import { HomeOffer } from './home-offer'
import { OurWorks } from './our-works'
import { OurClients } from './our-clients'

export const Home = () => {
    return (
        <div>
            <HomeOffer/>
            <OurWorks/>
            <OurClients/>
        </div>
    )
}