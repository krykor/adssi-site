import React from 'react';
import { PropTypes } from 'prop-types';

export const PortfolioButton = (props) => {
    return (
        <div 
            className={`col-lg-2 col text-center ${
                props.index === 0 ? `col-lg-offset-1 col-sm-3` : 
                    (props.index ===  props.buttonLength ? `col-sm-12` : `col-sm-3`)}`}>

            <button 
                type="button" 
                className={`btn btn-primary`}
                onClick={() => props.handleClick(props.button.filter)}
                >{props.button.text}</button>

        </div>
    )
}

PortfolioButton.propTypes = {
    index: PropTypes.number.isRequired,
    buttonLength: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    button: PropTypes.shape({
        filter: PropTypes.string,
        text: PropTypes.string.isRequired,
    }),
};