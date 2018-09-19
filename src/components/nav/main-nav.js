import React from 'react'
import { Link } from 'react-router-dom';

export const MainNav = (props) => {
    return (
        <nav className={`navbar navbar-inverse navbar-inverse-${props.color} navbar-fixed-top ${props.color !== "home" ? 'affix-top-color' : ''}`} data-spy={props.navClass} data-offset-top="10">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className={`navbar-toggle navbar-toggle-${props.color}`} data-toggle="collapse" data-target="#myNavbar">
                        <span className={`icon-bar icon-bar-${props.color}`}></span>
                        <span className={`icon-bar icon-bar-${props.color}`}></span>
                        <span className={`icon-bar icon-bar-${props.color}`}></span>
                    </button>
                    <Link to="/" className="navbar-brand" onClick={() => props.setColors('home')}>
                        <img src="https://adssi.pl/img/loga/slicestrona2.png" height="30px" alt="Logo"/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className={`nav navbar-nav navbar-nav-${props.color} navbar-right`}>
                        <li><Link to="/oferta" onClick={() => props.setColors('home')}>Oferta</Link></li>
                        <li><Link to="/portfolio" onClick={() => props.setColors('home')}>Portfolio</Link></li>
                        <li><Link to="/kontakt" onClick={() => props.setColors('home')}>Kontakt</Link></li>
                        <li><a href="https://www.facebook.com/AdssiAgency/" alt="Facebook" title="Nasz Facebook"><i className="fab fa-facebook-square fa-lg" aria-hidden="true"></i> </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}