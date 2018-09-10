import React, { Component } from 'react'

import { SectionHead } from '../stateless/section-head'
import { OurWorksElement } from '../home/our-works-element'
import  ourWorksData  from '../../api/ourWorksData.json'

export class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourWorks: [],
            portfolioHead: {
                title: "Nasze prace",
                content: [
                    {
                        id: "portfolioHead1",
                        text: "Za naszymi Klientami zobaczysz projekt, za projektem możliwości - odkryj je wspólnie z nami."
                    },
                    {
                        id: "portfolioHead2",
                        text: "Słuchamy, tworzymy oraz wdarżamy unikalne projekty. Bądź z nami w kontakcie!"
                    }
                ]
            },
            buttonText: ["Web Design", "Social Media", "Graphic Design", "Photo", "Wszystkie"]
            
        }
    }

    componentDidMount() {
        this.setState(
            { ourWorks: ourWorksData } 
        )
    }
    
    render() {
        console.log(this.state.ourWorks)
        return (
            <section id="portfolio" className="bg-color-bialy portfolio-grid">
                <div className="container">
                    <div className="row">
                        <SectionHead 
                            title={this.state.portfolioHead.title}
                            content={this.state.portfolioHead.content}/>

                        {this.state.buttonText.map((item, index) => 
                            <div 
                                className={`col-lg-2 col text-center ${
                                    index === 0 ? `col-lg-offset-1 col-sm-3` : 
                                        (index ===  this.state.buttonText.length-1 ? `col-sm-12` : `col-sm-3`)}`} 

                                key={`portfolio-button-${index}`}>

                                <button type="button" className={`btn btn-primary`}>{item}</button>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        {this.state.ourWorks.map(x => 
                            <OurWorksElement 
                                group={x.group} 
                                key={x.id} 
                                client={x.client} 
                                category={x.category} 
                                src={x.imgSrc} 
                                imgAlt={x.imgAlt}/>)}
                    </div>
                </div>
            </section>
        )
    }
}