import React, { Component } from 'react';

import { OurWorksElement } from './our-works-element'
import { Button } from '../stateless/button'
import { SectionHead } from '../stateless/section-head'

import  ourWorksData  from '../../api/ourWorksData.json'

export class OurWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourWorksHead: {
                title: 'Nasze prace',
                content: [
                    { 
                        id: 'ourWorks1',
                        text: 'Za naszymi Klientami zobaczysz projekt, za projektem możliwości - odkryj je wspólnie z nami.'
                    },
                    { 
                        id: 'ourWorks2', 
                        text: 'Słuchamy, tworzymy oraz wdarżamy unikalne projekty. Bądź z nami w kontakcie!'
                    }
                ]
            }, 
            ourWorks: []
        }
    }

    componentDidMount() {
        this.setState(
            { ourWorks: ourWorksData } 
        )
    }
    
    render() {
        return (
            <section id="portfolio" className="bg-color-white">
            <div className="container">
                <SectionHead 
                title={this.state.ourWorksHead.title}
                content={this.state.ourWorksHead.content}/>

                <div className="row">
                    {this.state.ourWorks.filter(item => item.home).sort((a, b) => a.home-b.home).map(x => 
                        <OurWorksElement 
                            group={x.group} 
                            key={x.id}
                            id={x.id} 
                            client={x.client} 
                            category={x.category} 
                            src={x.imgSrc} 
                            imgAlt={x.imgAlt}/>)}
                      
                    <Button link='/portfolio'/>
                </div>
            </div>
        </section>
        )
    }
}