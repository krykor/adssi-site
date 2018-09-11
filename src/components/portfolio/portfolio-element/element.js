import React, { Components } from 'react'
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom'


import  ourWorksData  from '../../../api/ourWorksData.json'

export const Elements = ({match}) => (
    
    <div className="portfolio-site">
        <div className="container">
            <div className="row">
                <div id="aa" className="col-md-7">
                                    <p><img src="img/portfolio/strony/rzeznia/strona-rzezni-1.jpg" width="100%" alt="Strona Restauracji Stara Rzeźnia" title="Strona Restauracji Stara Rzeźnia"/></p>
                                    <p><img src="img/portfolio/strony/rzeznia/strona-rzezni-2.jpg" width="100%" alt="Strona Restauracji Stara Rzeźnia" title="Strona Restauracji Stara Rzeźnia"/></p>
                                    <p><img src="img/portfolio/strony/rzeznia/strona-rzezni-3.jpg" width="100%" alt="Strona Restauracji Stara Rzeźnia" title="Strona Restauracji Stara Rzeźnia"/></p>

                </div>
                <div className="col-md-5">
                    <div id="bb" className="sidebarportfolio">
                        <h2>Strona Restauracji Stara Rzeźnia</h2>{console.log(
                            
                            
                            ourWorksData.find((x)=> match.params.user === x.id)
                            
                            )}
                        <hr className="line-blue"/>
                        <p>Witryna Restauracji Stara Rzeźnia jest projektem nowoczesnym, nawiązującym do klimatu miejsca i ukazującym zespół, wystrój, menu oraz aktualności. Strona wyposażona została w system rezerwacyjny skracający drogę kontaktu i ułatwiający przebieg rezerwacji. Witryna jest responsywna, przejrzysta i intuicyjna.</p>
                        <ul className="list-check" title="Działania">
                            <li>dopasowany system zarządzania treścią</li>
                            <li>intuicyjna i responsywna strona WWW</li>
                            <li>wsparcie graficzne i copywriterskie</li>
                            <li>opracowanie tekstów przyjaznych SEO</li>
                            <li>projekt oparty o technikę User Experience</li>
                        </ul>
                        <hr/>
                        <div className="list-info">
                                <p><span>Klient:</span> Restauracja Stara Rzeźnia</p>
                                <p><span>Usługa:</span> Strona internetowa</p>
                                <p><span>Data:</span> Marzec 2017</p>
                        </div>
                        <a href="http://rzeznia.com.pl" target="_blank"><button type="button" className="btn btn-primary">Zobacz stronę</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );