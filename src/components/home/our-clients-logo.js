import React from 'react';
import { PropTypes } from 'prop-types'

export const OurClientsLogo = ({ourClients}) => {
    return (
        <div className="col-sm-3 logo">
            <img 
                src={ourClients.src} 
                id={ourClients.id} 
                alt={ourClients.id} 
                title={ourClients.id}>
            </img>
        </div>   
    )
}

OurClientsLogo.propTypes = {
    ourClients: PropTypes.objectOf(PropTypes.string.isRequired) 
}
