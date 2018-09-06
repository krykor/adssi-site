import React from 'react'
import { Button } from '../stateless/button'

export const SingleOffer = ({ ourOffer }) => {
    return (
        <div className="col-md-6">
            <h3>{ourOffer.title}</h3>
            <p>{ourOffer.text}</p>
            {<ul className="list-check list-check-social">{ourOffer.list.map((item, index) => <li key={`${ourOffer.id}-${index}`}>{item}</li>)}</ul>}
            <Button link="/portfolio" text="Sprawdź" buttonClass={ourOffer.btnClass} />
        </div>
    )
}