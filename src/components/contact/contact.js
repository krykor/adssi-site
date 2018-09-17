import React, { Component } from 'react'

import { OfferComponent } from '../home/offer-component';
import { OfferComponentLeft } from '../home/offer-left-component';

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactComponent: {
                title: 'Bądźmy w kontakcie',
                p1: 'Z przyjemnością odpowiemy na Twoje pytania i opowiemy jak wygląda współpraca z nami. Podpowiemy jakie rozwiązania i możliwości możemy Ci zaoferować. Stworzymy ofertę dostosowaną do Twoich potrzeb.',
                p2: 'Skontaktuj się z nami - telefonicznie, maliowo lub poprzez nasz profil na Facebooku.'
            },
            contactComponentForm: [
                {
                    id: 'test111',
                    title: 'messenger',
                    text: 'Wejdź do aplikacji Messenger w swoim telefonie lub tablecie, skieruj aparat na nasz kod Czekamy na Twoją wiadomość!',
                    icon: 'fa-users',
                    divClass: 'sr1'
                },
                {
                    id: 'test122',
                    title: 'e-mail lub telefon',
                    text: 'Napisz do nas maila lub zadzwoń - jak Ci wygodniej. Odpowiemy na Twoje pytania i przedstawimy możliwości.',
                    icon: 'fa-lightbulb',
                    divClass: 'sr1'
                }
            ],
        }
    }
    render() {
        return (
            <div style={{backgroundColor: '#abebeb'}}>
                <div>
                    <div className="img-contact">
                        <img width="100%" src="http://adssi.pl/img/kontakt-1.jpg" alt="Menu walentynkowe" title="Menu walentynkowe dla Restauracji Zamkowej"/>
                        <div className="img-text">
                            <h3>SKONTAKTUJ SIĘ Z NAMI</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-color-bright">
                    <div id="uslugi" className="container text-center">
                        <div className="row">
                            <OfferComponentLeft 
                                title={this.state.contactComponent.title} 
                                p1={this.state.contactComponent.p1} 
                                p2={this.state.contactComponent.p2}/>
                        
                            <div className="col-sm-7 col-sm-offset-1">
                                <div className="row">
                                    {this.state.contactComponentForm.map(x =>
                                        <OfferComponent 
                                            title={x.title} 
                                            key={x.id} 
                                            text={x.text} 
                                            icon={x.icon} 
                                            divClass={x.divClass}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}