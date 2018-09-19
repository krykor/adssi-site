import React from 'react'

import { SliderIndicators } from './slider-indicators'
import { SliderContent } from './slider-content'
import { SliderControls } from './slider-controls';

export const Slider = () => {
    return (
        <section>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <SliderIndicators />
                <SliderContent />
                {['Previous', 'Next'].map((item, index) => <SliderControls control={item} key={'control-' + index}/>)}
            </div>
        </section>
    )
}