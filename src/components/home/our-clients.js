import React, { Component } from 'react';
import { SectionHead } from '../stateless/section-head'
import { OurClientsLogo } from '../home/our-clients-logo'

export class OurClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourClientsHead: {
                title: 'Zaufali nam',
            },
            ourClients: [
                {
                    id: 'Restauracja Stara Rzeźnia',
                    src: 'https:adssi.pl/img/loga/stara-rzeznia.png',
                },
                {
                    id: 'Restauracja Zamkowa',
                    src: 'https:adssi.pl/img/loga/zamkowa.png',
                },
                {
                    id: 'Usługi Kominiarskie Orell',
                    src: 'https:adssi.pl/img/loga/orell.png',
                },
                {
                    id: 'L by Iv',
                    src: 'https:adssi.pl/img/loga/l.png',
                }
            ]
        }
    }
    render() {
        return (
            <section className="bg-color-bialy">
				<div id="corpo" className="container text-center">
                    <SectionHead title={this.state.ourClientsHead.title}/>
                    <div className="row">
                        {this.state.ourClients.map(item => <OurClientsLogo ourClients={item} key={item.id}/>)}
                    </div>
                </div>
			</section>
        )
    }
} 
    
