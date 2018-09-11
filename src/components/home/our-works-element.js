import React from 'react';
import { Link } from 'react-router-dom'

export const OurWorksElement = (props) => {
    return (
        <div className={`col-sm-4 portfolio-item sr3 ${props.group}`}>
            <Link to={`/portfolio/${props.id}`} className="portfolio-link" id={props.id}>
                <div className="caption">
                    <div className="caption-content">
                        <h3>{props.client}</h3>
                        <p>{props.category.toUpperCase()}</p>
                    </div>
                </div>
                <img src={props.src} className="img-responsive" alt={props.alt}></img>
            </Link>
        </div>
    )
} 
    
