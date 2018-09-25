import React from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'

export const OfferComponent = (props) => {
    return(
        <div id={props.id} className="col-sm-6 servises">
            <Fade bottom><FontAwesomeIcon icon={props.icon} size="4x" className="text-primary"/></Fade>
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