import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OurWorksElement } from './our-works-element'

export class OurWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <div className="row">
                    <div className="col-lg-12 text-center servises">
                        <h2>Nasze prace</h2>
                        <hr className="line-blue-cen text-center"></hr>
                        <p>Za naszymi Klientami zobaczysz projekt, za projektem możliwości - odkryj je wspólnie z nami. </p>
                        <p>Słuchamy, tworzymy oraz wdarżamy unikalne projekty. Bądź z nami w kontakcie!</p>
                    </div>
                </div>
                <div className="row">
                    {this.state.ourWorks.map(x => <OurWorksElement title={x.title} key={x.id} client={x.client} category={x.category} src={x.src} imgAlt={x.imgAlt}/>)}
                      
                    <div className="col-sm-12 text-center">
                        <Link to="/portfolio"> 
                            <button type="button" className="btn btn-primary">Więcej</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}