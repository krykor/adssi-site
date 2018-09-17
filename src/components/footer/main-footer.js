import React, { Component } from 'react';
import { SectionHead } from '../stateless/section-head';
import { FooterDetails } from './footer-details'

export class MainFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footer: {
                title: 'Kontakt',
            },
            footerDetails: [
                {
                    id: 'tel',
                    href: 'tel:504986412',
                    contact: `504 986 412`,
                    classElement: 'col-sm-3 col-sm-offset-1 circlefoot-area text-center',
                    icon: 'fa fa-phone'
                },
                {   id: 'mail',
                    href: 'mailto:agencja@adssi.pl',
                    contact: 'agencja@adssi.pl',
                    classElement: 'col-sm-4 circlefoot-area',
                    icon: 'far fa-envelope'
                },
                {
                    id: 'FB-contact',
                    href: 'https://www.facebook.com/AdssiAgency/',
                    contact: '@AdssiAgency',
                    classElement: 'col-sm-3 circlefoot-area text-center',
                    icon: 'fab fa-facebook-f'
                },
            ]
        }
    }
    render() {
        return (
            <footer className="text-center">
                <div className="footer-1">
                    <div className="container">
                        <SectionHead title={this.state.footer.title} color={this.props.color}/>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.state.footerDetails.map(item => <FooterDetails details={item} key={item.id} color={this.props.color}/>)}
                        </div>
                    </div>
                </div>
                <div className={`text-center bg-primary bg-primary-${this.props.color} footer-2`}>
                    <p>© Copyright Interaktywna Agencja Marketingowa Adssi</p>
                </div>
            </footer>
        )
    }
} 
