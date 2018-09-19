import React from 'react';
import { PropTypes } from 'prop-types';

export const OfferComponent = (props) => {
    return(
        <div id={props.id} className="col-sm-6 servises">
            <i className={`fa ${props.icon} fa-4x text-primary ${props.divClass}`} aria-hidden="true"></i>
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