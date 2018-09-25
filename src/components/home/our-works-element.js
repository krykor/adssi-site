import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'


import Fade from 'react-reveal/Fade'

export const OurWorksElement = (props) => {
    return (
        <Fade bottom>
            <div className={`col-sm-4 portfolio-item sr3 ${props.group}`}>
                <Link to={`/portfolio/${props.id}`} className="portfolio-link" id={props.id}>
                    <div className="caption">
                        <div className="caption-content">
                            <h3>{props.client}</h3>
                            <p>{props.category.toUpperCase()}</p>
                        </div>
                    </div>
                    <img src={props.src} className="img-responsive" alt={props.imgAlt}></img>
                </Link>
            </div>
        </Fade>
    )
}

OurWorksElement.propTypes = {
    group: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
};