import React from 'react'
import { Button } from '../stateless/button'

export const SingleOffer = ({ ourOffer, index }) => {
    const SingleOfferText = ({ ourOffer }) => {
        return (
            <div className="col-md-6">
                <h3>{ourOffer.title}</h3>
                <p>{ourOffer.text}</p>
                {<ul className="list-check list-check-social">{ourOffer.list.map((item, index) => <li key={`${ourOffer.id}-${index}`}>{item}</li>)}</ul>}
                <Button link="/portfolio" text="Sprawdź" buttonClass="btn-social" />
            </div>
        )
    }

    const SingleOfferImg = ({ ourOffer }) => {
        return (
            <div className="col-md-6">
                <p><img src={ourOffer.src} width="100%" alt={ourOffer.imgAlt} title={ourOffer.imgAlt}></img></p>
            </div>
        )
    }

    return (
        <div className="container oferty-margin">
            {index % 2 == 0 ? (
                <div className={`row oferty ${ourOffer.id} sr4`}><SingleOfferText ourOffer={ourOffer} /><SingleOfferImg ourOffer={ourOffer} /></div>
            ) : (
                <div className={`row oferty ${ourOffer.id} sr4`}><SingleOfferImg ourOffer={ourOffer} /><SingleOfferText ourOffer={ourOffer} /></div>
            )}
        </div>
    )
}