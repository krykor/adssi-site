import React, { Component } from 'react'

import { Button } from '../stateless/button'
import { SliderImg } from './slider-img'

import Slide from 'react-reveal/Slide'

export class SliderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: [
                {
                    src: 'https://adssi.pl/img/slider/zeszyt.jpg',
                    srcSet: `
                    https://adssi.pl/img/slider/zeszyt.jpg 1920w, 
                    https://adssi.pl/img/slider/zeszyt-300.jpg 300w, 
                    https://adssi.pl/img/slider/zeszyt-768.jpg 768w, 
                    https://adssi.pl/img/slider/zeszyt-1024.jpg 1024w, 
                    https://adssi.pl/img/slider/zeszyt-600.jpg 600w`,
                    alt: 'Slide 1'
                },
                {
                    src: 'https://adssi.pl/img/slider/laptop.jpg',
                    srcSet: `
                    https://adssi.pl/img/slider/laptop.jpg 1920w, 
                    https://adssi.pl/img/slider/laptop-300.jpg 300w, 
                    https://adssi.pl/img/slider/laptop-768.jpg 768w, 
                    https://adssi.pl/img/slider/laptop-1024.jpg 1024w, 
                    https://adssi.pl/img/slider/laptop-600.jpg 600w`,
                    alt: 'Slide 1'
                },
            ],
        }
    }
    render() {
        return (
            <div className="carousel-inner bg-color-white-slider">
                <div className="item active">
                    <SliderImg slide={this.state.slide[0]}/>
                    <div className="container carousel-caption">
                        <div className="row">
                            <Slide left cascade>
                                <div className="col-sm-12 col-sm-offset0 text-left sr1222">
                                    <h3>Marketing <span className="text-primary">mówi </span> do ludzi</h3>
                                    <h3>Content marketing z nimi <span className="text-primary">rozmawia</span></h3>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <SliderImg slide={this.state.slide[1]}/>
                    <Slide left>
                        <div className="carousel-caption text-right sr111">
                            <h3 className="text-right">Komuniakcja jest <span className="text-primary">strategią.</span></h3>
                            <Button link="/kontakt" textAlign="text-right" text="Napisz do nas" buttonClass="btn-slider"/>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}