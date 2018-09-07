import React from 'react'
import { Link } from 'react-router-dom';

export const MainNav = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" data-spy={props.navClass} data-offset-top="10">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img src="https:adssi.pl/img/loga/slicestrona2.png" height="30px" alt="Logo"/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/oferta">Oferta</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                        <li><a href="https://www.facebook.com/AdssiAgency/"><i className="fab fa-facebook-square fa-lg" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}