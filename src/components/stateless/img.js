import React from 'react'
import { PropTypes } from 'prop-types';

export const Img = (props) => {
    return (
        <div className={`col-md-${props.imgClass}`}>
            <p><img src={props.src} width="100%" alt={props.imgAlt} title={props.imgAlt}></img></p>
        </div>
    )
}
Img.propTypes = {
    src: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    imgClass: PropTypes.string,
};
Img.defaultProps = {
    imgClass: '12',
};