import React from 'react'
import { PropTypes } from 'prop-types';

import { Button } from '../stateless/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SingleOffer = ({ ourOffer }) => {
    return (
        <div className="col-md-6">
            <h3>{ourOffer.title}</h3>
            <p>{ourOffer.text}</p>
            {<ul className={`list-check list-check-${ourOffer.id}`}>{ourOffer.list.map((item, index) => <li key={`${ourOffer.id}-${index}`}><FontAwesomeIcon icon="check"/> {item}</li>)}</ul>}
            <Button link="/portfolio" text="Sprawdź" buttonClass={ourOffer.btnClass} />
        </div>
    )
}

SingleOffer.propTypes = {
    ourOffer: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        list: PropTypes.array,
        grid: PropTypes.string,
    }),
};