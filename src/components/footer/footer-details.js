import React from 'react';
import { PropTypes } from 'prop-types';

export const FooterDetails = ({details, color}) => {
    return(
        <div className={details.classElement}>
            <i className={`${details.icon} fa-1x text-primary text-primary-${color}`} aria-hidden="true"></i>
            <a href={details.href} className="text-muted">{details.contact}</a>
        </div>  
    )
}

FooterDetails.propTypes = {
    details: PropTypes.shape({
        classElement: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
    }),
    color: PropTypes.string.isRequired,
};