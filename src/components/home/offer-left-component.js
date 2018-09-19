import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from '../stateless/button'

export const OfferComponentLeft = (props) => {
    return(
        <div className="col-sm-4 text-left">
            <h2>{props.title}</h2>
            <hr className="line-blue"/>
            <p>{props.p1}</p>
            <p className="margin-text-servises">{props.p2}</p>
            {props.buttonLink && <Button link={props.buttonLink}/> }
        </div>
    )
}

OfferComponentLeft.propTypes = {
    title: PropTypes.string.isRequired,
    p1: PropTypes.string,
    p2: PropTypes.string,
    buttonLink: PropTypes.string,
};