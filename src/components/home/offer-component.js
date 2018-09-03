import React from 'react';

export const OfferComponent = (props) => {
    return(
        <div key={props.id} id={props.id} className="col-sm-6 servises">
            <i className={`fa ${props.icon} fa-4x text-primary ${props.divClass}`} aria-hidden="true"></i>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}