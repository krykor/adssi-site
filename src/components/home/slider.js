import React, { Component } from 'react'
import { SliderElement } from './slider-element'
import { Button } from '../stateless/button'

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: [
                {
                    src: 'https:adssi.pl/img/slider/zeszyt.jpg',
                    srcSet: `
                    https:adssi.pl/img/slider/zeszyt.jpg 1920w, 
                    https:adssi.pl/img/slider/zeszyt-300.jpg 300w, 
                    https:adssi.pl/img/slider/zeszyt-768.jpg 768w, 
                    https:adssi.pl/img/slider/zeszyt-1024.jpg 1024w, 
                    https:adssi.pl/img/slider/zeszyt-600.jpg 600w`,
                },
                {
                    src: 'https:adssi.pl/img/slider/laptop.jpg',
                    srcSet: `
                    https:adssi.pl/img/slider/laptop.jpg 1920w, 
                    https:adssi.pl/img/slider/laptop-300.jpg 300w, 
                    https:adssi.pl/img/slider/laptop-768.jpg 768w, 
                    https:adssi.pl/img/slider/laptop-1024.jpg 1024w, 
                    https:adssi.pl/img/slider/laptop-600.jpg 600w`,
                },
            ],
        }
    }
    render() {
        return (
            <section>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li id="test147" data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner bg-color-bialy-sl">
                        <div className="item active">
                            <SliderElement slide={this.state.slide[0]}/>
                            <div className="container carousel-caption">
                                <div className="row">
                                    <div className="col-sm-12 col-sm-offset0 text-left sr1222">
                                        <h3>Marketing <span className="text-primary">mówi </span> do ludzi</h3>
                                        <h3>Content marketing z nimi <span className="text-primary">rozmawia</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <SliderElement slide={this.state.slide[1]}/>
						    <div className="carousel-caption text-right sr111">
                                <h3 className="text-right">Komuniakcja jest <span className="text-primary">strategią.</span></h3>
                                <Button link="/kontakt" textAlign="text-right" text="Napisz do nas" buttonClass="btn-slider"/>
                            </div>
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        )
    }
}