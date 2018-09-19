import React, { Component } from 'react'

import { Button } from '../../stateless/button'

import  ourWorksData  from '../../../api/ourWorksData.json'

export class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourWorks: ourWorksData.find((x)=> this.props.match.params.user === x.id),
            colors: ourWorksData.find((x)=> this.props.match.params.user === x.id).colour
        }
    }
    componentDidMount() {this.setColors2()}
     
    setColors2() {this.props.colors(this.state.colors)}

    render() {
        return (
            <div className="portfolio-site">
                <div className="container">
                    <div className="row">
                        <div id="aa" className="col-md-7">
                            {this.state.ourWorks.imgDetails.map((item, index) => <p key={`${this.state.ourWorks.id}-img-${index}`}><img src={item.src} width="100%" alt={item.alt} title={item.title}/></p>)}
                        </div>
                        <div className="col-md-5">
                            <div id="bb" className="sidebar-portfolio">
                                <h2>{this.state.ourWorks.title}</h2>
                                <hr className={`line-blue line-blue-${this.state.colors}`}/>
                                <p>{this.state.ourWorks.description}</p>
                                <ul className={`list-check list-check-${this.state.colors}`} title="Działania">
                                    {this.state.ourWorks.list.map((item, index)=> <li key={`${this.state.ourWorks.id}-list-${index}`}>{item}</li>)}
                                </ul>
                                <hr/>
                                <div className="list-info">
                                        <p><span>Klient:</span> {this.state.ourWorks.client}</p>
                                        <p><span>Usługa:</span> {this.state.ourWorks.category}</p>
                                        <p><span>Data:</span> {this.state.ourWorks.date}</p>
                                </div>
                                {this.state.ourWorks.btnDetails && this.state.ourWorks.btnDetails.map((item, index) => <Button 
                                    link={item.link}
                                    text={item.text}
                                    grid="col-sm-6"
                                    key={`${this.state.ourWorks.id}-button-${index}`}
                                    buttonClass={`btn-primary-${this.state.colors}`}
                                />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}