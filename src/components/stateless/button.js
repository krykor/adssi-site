import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const Button = (props) => {
    return (
        <div className="col-sm-12 text-center">
            <Link to={props.link}> 
                <button type="button" className="btn btn-primary">{props.text}</button>
            </Link>
        </div>
    )
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
Button.defaultProps = {
    text: 'Więcej'
};