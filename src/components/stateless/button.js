import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const Button = (props) => {
    return (
        <div className={`${props.grid} ${props.textAlign}`}>
            <Link to={props.link}> 
                <button type="button" className={`btn btn-primary ${props.buttonClass}`}>{props.text}</button>
            </Link>
        </div>
    )
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textAlign: PropTypes.string,
    buttonClass: PropTypes.string,
    grid: PropTypes.string,
};
Button.defaultProps = {
    text: 'Więcej',
    textAlign: 'text-center',
    grid: 'col-sm-12'
};