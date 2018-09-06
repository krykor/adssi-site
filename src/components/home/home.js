import React from 'react'

import { MainNav } from '../nav/main-nav';
import { Slider } from './slider'
import { HomeOffer } from './home-offer'
import { OurWorks } from './our-works'
import { OurClients } from './our-clients'

export const Home = () => {
    return (
        <div>
            {/*  */}
            <Slider/>
            <HomeOffer/>
            <OurWorks/>
            <OurClients/>
        </div>
    )
}