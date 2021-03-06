import React from 'react';
import { PropTypes } from 'prop-types'

export const SectionHead = ({title, content, color}) => {
    return (
        <div>
            <div className="col-lg-12 text-center servises">
                <h2>{title}</h2>
                <hr className={`line-blue-center line-blue-center-${color} text-center`}/>
                {content && content.map(item => <p key={item.id}>{item.text}</p>)}
            </div>
        </div>
    )
}

SectionHead.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
}
