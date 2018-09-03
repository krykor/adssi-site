import React from 'react';
import { Link } from 'react-router-dom';

export const OfferComponentLeft = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <hr className="line-blue"/>
            <p>{props.p1}</p>
            <p className="margin-text-servises">{props.p2}</p>
            <div className="text-center">
                <Link to="/oferta">
                    <button type="button" className="btn btn-primary">Więcej</button>
                </Link>
            </div>
        </div>
    )
}