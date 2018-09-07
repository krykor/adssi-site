import React from 'react'

import { Slider } from './slider'
import { HomeOffer } from './home-offer'
import { OurWorks } from './our-works'
import { OurClients } from './our-clients'
import { MainNav } from '../nav/main-nav';

export const Home = () => {
    return (
        <div>
            <MainNav navClass="affix"/>
            <Slider/>
            <HomeOffer/>
            <OurWorks/>
            <OurClients/>
        </div>
    )
}