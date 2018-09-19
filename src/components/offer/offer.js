import React, { Component } from 'react'

import { SingleOffer } from './single-offer'
import { Img } from '../stateless/img'

import ourOfferData from '../../api/ourOfferData.json'

export class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourOffer: []
        }
    }

    componentDidMount() {
        this.setState(
            { ourOffer: ourOfferData } 
        )
    }

    render() {
        const offerArray = (item) => [
            <SingleOffer 
                ourOffer={item} 
                key={item.id}/>, 
            <Img 
                src={item.src} 
                key={`${item.id}-img`} 
                imgAlt={item.imgAlt} 
                imgClass="6"/>
        ]

        return (
            <div className="container-fluit">
                <div className="container offer-margin">
                    {this.state.ourOffer.map((item, index) => 
                        <div className={`row offer ${item.id} sr4`} key={`${item.id}-div`}>
                            {index % 2 === 0 ? (offerArray(item)) : (offerArray(item).reverse())}
                        </div>
                    )}   
                </div>
            </div>
        )
    }
}