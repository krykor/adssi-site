import React from 'react';

export const OurWorksElement = (props) => {
    return (
        <div className={`col-sm-4 portfolio-item sr3 ${props.category}`}>
            <a href="strona-rzeznia.php" className="portfolio-link" alt={props.alt}>
                <div className="caption">
                    <div className="caption-content">
                        <h3>{props.client}</h3>
                        <p>{props.title}</p>
                    </div>
                </div>
                <img src={props.src} className="img-responsive" alt={props.alt}></img>
            </a>
        </div>
    )
} 
    
