import React, { Component } from 'react';
import { OurWorksElement } from './our-works-element'
import { Button } from '../stateless/button'
import { SectionHead } from '../stateless/section-head'

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
            ourWorks: [
                {
                    id: 'strona-rzeznia',
                    client: 'Restauracja Stara Rzeźnia',
                    title: 'STRONA INTERNETOWA',
                    category: 'webp',
                    src: 'https://adssi.pl/img/portfolio/strony/rzeznia/strona-rzeznia.jpg',
                    imgAlt: 'Strona internetowa Restauracji Stara Rzeźnia'
                },
                {
                    id: 'profil-zamkowa',
                    client: 'Restauracja Zamkowa',
                    title: 'SOCIAL MEDIA',
                    category: 'social',
                    src: 'https://adssi.pl/img/portfolio/social/zamkowa/sm-zamkowa.jpg',
                    imgAlt: 'Strona Facebook Restauracji Stara Rzeźnia'
                },
                {
                    id: 'projekt-walentynkowy-zamkowa',
                    client: 'Restauracja Zamkowa',
                    title: 'PROJEKT GRAFICZNY',
                    category: 'graphicd',
                    src: 'https://adssi.pl/img/portfolio/targi-slubne/targi-slubne.jpg',
                    imgAlt: 'Projekt walentynkowy'
                },
                {
                    id: 'profil-orell',
                    client: 'Orell',
                    title: 'SOCIAL MEDIA',
                    category: 'social',
                    src: 'http://adssi.pl/img/portfolio/social/orell/sm-orell.jpg',
                    imgAlt: 'Profil Orell'
                },
                {
                    id: 'kolacja-degustacyjna',
                    client: 'Restauracja Stara Rzeźnia',
                    title: 'PROJEKT GRAFICZNY',
                    category: 'graphicd',
                    src: 'http://adssi.pl/img/portfolio/kolacja-degustacyjna/zaproszenie.jpg',
                    imgAlt: 'Kolacja degustacyja w Restauracji Stara Rzeźnia'
                },
                {
                    id: 'sm-rzeznia',
                    client: 'Restauracja Stara Rzeźnia',
                    title: 'SOCIAL MEDIA',
                    category: 'social',
                    src: 'http://adssi.pl/img/portfolio/social/rzeznia/sm-rzeznia.jpg',
                    imgAlt: 'Profile Social Media Restauracji Stara Rzeźnia'
                }
            ],
        }
    }
    render() {
        return (
            <section id="portfolio" className="bg-color-bialy">
            <div className="container">
                <SectionHead 
                title={this.state.ourWorksHead.title}
                content={this.state.ourWorksHead.content}/>

                <div className="row">
                    {this.state.ourWorks.map(x => <OurWorksElement title={x.title} key={x.id} client={x.client} category={x.category} src={x.src} imgAlt={x.imgAlt}/>)}
                      
                    <Button link='/portfolio'/>
                </div>
            </div>
        </section>
        )
    }
}