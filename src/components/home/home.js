import React from 'react'

import { Slider } from './slider'
import { HomeOffer } from './home-offer'
import { OurWorks } from './our-works'
import { OurClients } from './our-clients'

export const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeOffer/>
            <OurWorks/>
            <OurClients/>
        </div>
    )
}