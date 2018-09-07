import React, { Component } from 'react';

import { OfferComponent } from './offer-component';
import { OfferComponentLeft } from './offer-left-component';

export class HomeOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offerComponent: {
                title: 'Projekt jest cichym ambasadorem Twojej marki',
                p1: 'Jesteśmy zespołem pełnym pasji, kreatywności i posiadającym narzędzia, odpowiadające potrzebom naszych Klientów. Uzupełniamy się umiejętnościami, dlatego nie ma dla nas rzeczy niemożliwych.',
                p2: 'Ważne jest dla nas zrozumienie celów, planów oraz otoczenia. Słuchamy i wdrażamy skuteczne strategie, tworząc unikalne projekty.'
            },
            offerComponentV1: [
                {
                    id: 'test11',
                    title: 'Social media',
                    text: 'kreujemy wizerunek zgodny z marką, angażujemy, monitorujemy i koordynujemy wszelkie działania',
                    icon: 'fa-users',
                    divClass: 'sr1'
                },
                {
                    id: 'test12',
                    title: 'Kampanie reklamowe',
                    text: 'opracowywanie strategii kampanii i jej optymalizacja to nieodłączny element marketingu',
                    icon: 'fa-lightbulb',
                    divClass: 'sr1'
                }
            ],
            offerComponentV2: [
                {
                    id: 'test21',
                    title: 'video & foto',
                    text: 'fotografujemy, nagrywamy i edytujemy, by pokazać atuty Twojego produktu, usługi i całej marki',
                    icon: 'fa-camera',
                    divClass: 'sr12'
                },
                {
                    id: 'test22',
                    title: 'Strony www',
                    text: 'zadbamy by Twoja strona internetowa była responsywna, intuicyjna i zatrzymywała klientów na dłużej',
                    icon: 'fa-laptop',
                    divClass: 'sr12'
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-color-jasny">
                <div id="uslugi" className="container text-center">
                    <div className="row">
                        <OfferComponentLeft 
                            title={this.state.offerComponent.title} 
                            p1={this.state.offerComponent.p1} 
                            p2={this.state.offerComponent.p2}
                            buttonLink="/oferta"/>
                        <div className="col-sm-7 col-sm-offset-1">
                            <div className="row">
                                {this.state.offerComponentV1.map(x => <OfferComponent title={x.title} key={x.id} text={x.text} icon={x.icon} divClass={x.divClass}/>)}
                            </div>
                            <div className="row">
                                {this.state.offerComponentV2.map(x => <OfferComponent title={x.title} key={x.id} text={x.text} icon={x.icon} divClass={x.divClass}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
    
