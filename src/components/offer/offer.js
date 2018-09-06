import React, { Component } from 'react'

import { SingleOffer } from './single-offer'

export class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourOfferHead: {
                title: 'Nasze prace',
                content: [
                    { 
                        id: 'ourWorks1',
                        text: 'Za naszymi Klientami zobaczysz projekt, za projektem możliwości - odkryj je wspólnie z nami.'
                    },
                    { 
                        id: 'ourWorks2', 
                        text: 'Słuchamy, tworzymy oraz wdarżamy unikalne projekty. Bądź z nami w kontakcie!'
                    }
                ]
            },
            ourOffer: [
                {
                    id: 'social-o',
                    title: 'SOCIAL MEDIA',
                    text: 'Obecność Twojej firmy w mediach społecznościowych jest niezwykle istotna. Masz niespotykaną możliwość pokazania swojej firmy dla ogromnego grona odbiorców, zwiększenia świadomości marki, poznania klientów oraz ich oczekiwań. Pomożemy Ci w doborze odpowiednich serwisów, doradzimy, które sprawdzą się najlepiej w Twojej branży i będą skuteczne.',
                    list: [
                        'kreowanie wizerunku zgodnego z marką',
                        'pozyskiwanie odbiorców',
                        'pisanie angażujących wpisów',
                        'monitoring marki',
                        'koordynacja promocji'
                    ],
                    src: 'http://adssi.pl/img/portfolio/social/l/sm-l-2.jpg',
                    imgAlt: 'Facebook L by Iv'
                },
            ],
        }
    }
    render() {
        return (
            <div className="container-fluit">
                <div className="container oferty-margin">
                    {this.state.ourOffer.map( (item, index) => <SingleOffer ourOffer={item} key={item.id} index={index}/>)}
                    <div className="row oferty web-o sr41">
                        <div className="col-md-6">
                        <p><img src="img/portfolio/strony/rzeznia/strona-rzezni-1.jpg" width="100%" alt="Strona Restauracji Stara Rzeźnia"></img></p>
                        </div>
                        <div className="col-md-6">
                        <h3>WEB DESIGN</h3>
                        <p>
                            Wdrażamy nowoczesne, przejrzyste oraz responsywne strony internetowe, które na dłużej zatrzymują Klientów. Jest to możliwe dzięki wykorzystaniu techniki zorientowanej na użytkownika, dzięki której korzystanie z Twojej strony jest intuicyjne. Zapewnimy Ci obsługę graficzną, przygotujemy unikalne i przyjazne teksty SEO.
                        </p>
                        <ul className="list-check list-check-web">
                            <li>intuicyjność i responsywność</li>
                            <li>wsparcie graficzne</li>
                            <li>tworzenie atrakcyjnych treśc</li>
                            <li>dopasowany system zarządzania treścią</li>
                            <li>przygotowanie tekstów przyjaznych SEO</li>
                        </ul>
                        <div className="text-center"><a href="portfolio.php"><button type="button" className="btn btn-primary btn-web">Sprawdź</button></a></div>
                        </div>
                    </div>
                    <div className="row oferty graphic-o sr42">
                        <div className="col-md-6">
                        <h3>GRAPHIC DESIGN</h3>
                        <p>
                            Pragniesz zaprezentować swoją nową ofertę w ciekawy sposób lub pokazać czym się zajmujesz? Zadbamy, by informacje, które chcesz przekazać były przejrzyste oraz czytelne. Zaproponujemy Ci kilka możliwości i wspólnie ustalimy szczegóły projektu, by nadać mu unikatowy charakter.
                        </p>
                        <ul className="list-check list-check-graphic">
                            <li>opracowanie graficzne</li>
                            <li>wizualizacja projektu</li>
                            <li>wybór kolorystyki, kroju pisma</li>
                            <li>zachowanie spójności</li>
                            <li>unikatowy charakter</li>
                        </ul>
                        <div className="text-center"><a href="portfolio.php"><button type="button" className="btn btn-primary btn-graphic">Sprawdź</button></a></div>
                        </div>
                        <div className="col-md-6">
                        <p><img className="zdjecia-portfolio" width="100%" src="img/portfolio/projekt-walentynki/zamkowa/menu-4.jpg" alt="Menu walentynkowe" title="Menu walentynkowe dla Restauracji Zamkowej"/></p>
                        </div>
                    </div>
                    <div className="row oferty photo-o sr43">
                        <div className="col-md-6">
                        <p><img src="img/portfolio/sesje/photo.jpg" width="100%" alt="Strona Facebook L by Iv" title="Facebook L by Iv"/></p>
                        </div>
                        <div className="col-md-6">
                        <h3>PHOTO</h3>
                        <p>
                            Nawet najlepiej napisany tekst nie jest w stanie ukazać wszystkich zalet Twojej usługi. Treści graficzne stanowią doskonałe dopełnienie i pozwalają dotrzeć bezpośrednio do Klienta. Możesz wykorzystać ten przekaz, by budować wizerunek marki w świadomości odbiorców. Promowanie produktów oraz usług przez obraz jest skuteczne i dostarcza większej ilości informacji.
                        </p>
                        <ul className="list-check list-check-photo">
                            <li>sesje produktowe / usługowe</li>
                            <li>edycja materiałów</li>
                            <li>zarządzanie zawartością grafik</li>
                            <li>obsługa platform bazujących na zdjęciach</li>
                            <li>promowanie kampanii opartych na treściach graficznych</li>
                        </ul>
                        <div className="text-center"><a href="portfolio.php"><button type="button" className="btn btn-primary btn-photo">Sprawdź</button></a></div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}