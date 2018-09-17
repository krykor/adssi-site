import React, { Component } from 'react'

import { SectionHead } from '../stateless/section-head'
import { OurWorksElement } from '../home/our-works-element'
import { PortfolioButton } from './portfolio-button'
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
            buttonText: [
                {
                    text: "Web Design",
                    filter: "webp"
                },
                {
                    text: "Social Media",
                    filter: "social"
                },
                {
                    text: "Graphic Design",
                    filter: "graphicd"
                },
                {
                    text: "Photo",
                    filter: "photo"
                },
                {
                    text: "Wszystkie",
                }
            ],  
        }
    }
    componentDidMount() {
        this.setState(
            { 
                ourWorks: ourWorksData
            } 
        )
    }
    handleClick(x) {
        this.setState(
            {
                ourWorks: ourWorksData.filter( item => item.group === x).length ?  ourWorksData.filter( item => item.group === x) : ourWorksData,
            }
        )
    }
    render() {
        return (
            <section id="portfolio" className="bg-color-white portfolio-grid">
                <div className="container">
                    <div className="row">
                        <SectionHead 
                            title={this.state.portfolioHead.title}
                            content={this.state.portfolioHead.content}/>

                        {this.state.buttonText.map((item, index) => 
                            <PortfolioButton 
                            button={item} 
                            index={index} 
                            buttonLength={this.state.buttonText.length-1}
                            handleClick={x => this.handleClick(x)}
                            key={`portfolio-button-${index}`}/>
                        )}
                    </div>
                    <div className="row">
                        {this.state.ourWorks.map(x => 
                            <OurWorksElement 
                                group={x.group} 
                                key={x.id}
                                id={x.id} 
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