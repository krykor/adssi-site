import React from 'react';

export const FooterDetails = ({details, color}) => {
    return(
        <div className={details.classElement}>
            <i className={`${details.icon} fa-1x text-primary text-primary-${color}`} aria-hidden="true"></i>
            <a href={details.href} className="text-muted">{details.contact}</a>
        </div>  
    )
}