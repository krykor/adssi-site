import React from 'react';
import { PropTypes } from 'prop-types'

export const SectionHead = ({title, text}) => {
    return (
        <div className="row">
            <div className="col-lg-12 text-center servises">
                <h2>{title}</h2>
                <hr className="line-blue-cen text-center"></hr>
                {text.map(item => <p>{item}</p>)}
            </div>
        </div>
    )
}

SectionHead.propTypes = {
    title: PropTypes.string.isRequired,
    textP1: PropTypes.string,
    textP2: PropTypes.string
}
