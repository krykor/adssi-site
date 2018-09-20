import React from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const OfferComponent = (props) => {
    return(
        <div id={props.id} className="col-sm-6 servises">
            <FontAwesomeIcon icon={props.icon} size="4x" className="text-primary"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

OfferComponent.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    divClass: PropTypes.string,
    title:PropTypes.string, 
    text: PropTypes.string,
};