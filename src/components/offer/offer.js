import React, { Component } from 'react'

import { SingleOffer } from './single-offer'
import { Img } from '../stateless/img'

export class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    imgAlt: 'Facebook L by Iv',
                    btnClass: 'btn-social'
                },
                {
                    id: 'web-o',
                    title: 'WEB DESIGN',
                    text: 'Wdrażamy nowoczesne, przejrzyste oraz responsywne strony internetowe, które na dłużej zatrzymują Klientów. Jest to możliwe dzięki wykorzystaniu techniki zorientowanej na użytkownika, dzięki której korzystanie z Twojej strony jest intuicyjne. Zapewnimy Ci obsługę graficzną, przygotujemy unikalne i przyjazne teksty SEO.',
                    list: [
                        'intuicyjność i responsywność',
                        'wsparcie graficzne',
                        'tworzenie atrakcyjnych treści',
                        'dopasowany system zarządzania treścią',
                        'przygotowanie tekstów przyjaznych SEO'
                    ],
                    src: 'http://adssi.pl/img/portfolio/strony/rzeznia/strona-rzezni-1.jpg',
                    imgAlt: 'Strona Restauracji Stara Rzeźnia',
                    btnClass: 'btn-web'
                },
                {
                    id: 'graphic-o',
                    title: 'GRAPHIC DESIGN',
                    text: 'Pragniesz zaprezentować swoją nową ofertę w ciekawy sposób lub pokazać czym się zajmujesz? Zadbamy, by informacje, które chcesz przekazać były przejrzyste oraz czytelne. Zaproponujemy Ci kilka możliwości i wspólnie ustalimy szczegóły projektu, by nadać mu unikatowy charakter.',
                    list: [
                        'opracowanie graficzne',
                        'wizualizacja projektu',
                        'wybór kolorystyki, kroju pisma',
                        'zachowanie spójności',
                        'unikatowy charakter'
                    ],
                    src: 'http://adssi.pl/img/portfolio/projekt-walentynki/zamkowa/menu-4.jpg',
                    imgAlt: 'Menu walentynkowe dla Restauracji Zamkowej',
                    btnClass: 'btn-graphic'
                },
                {
                    id: 'photo-o',
                    title: 'PHOTO',
                    text: 'Nawet najlepiej napisany tekst nie jest w stanie ukazać wszystkich zalet Twojej usługi. Treści graficzne stanowią doskonałe dopełnienie i pozwalają dotrzeć bezpośrednio do Klienta. Możesz wykorzystać ten przekaz, by budować wizerunek marki w świadomości odbiorców. Promowanie produktów oraz usług przez obraz jest skuteczne i dostarcza większej ilości informacji.',
                    list: [
                        'sesje produktowe / usługowe',
                        'edycja materiałów',
                        'zarządzanie zawartością grafik',
                        'obsługa platform bazujących na zdjęciach',
                        'promowanie kampanii opartych na treściach graficznych'
                    ],
                    src: 'http://adssi.pl/img/portfolio/sesje/photo.jpg',
                    imgAlt: 'Sesja w Restauracji Zamkowa',
                    btnClass: 'btn-photo'
                },
            ],
        }
    }
    render() {
        const offerArray = (item) => [
            <SingleOffer 
                ourOffer={item} 
                key={item.id}/>, 
            <Img 
                src={item.src} 
                key={`${item.id}-img`} 
                imgAlt={item.imgAlt} 
                imgClass="6"/>
        ]

        return (
            <div className="container-fluit">
                <div className="container oferty-margin">
                    {this.state.ourOffer.map((item, index) => 
                        <div className={`row oferty ${item.id} sr4`}>
                            {index % 2 == 0 ? (offerArray(item)) : (offerArray(item).reverse())}
                        </div>
                    )}   
                </div>
            </div>
        )
    }
}