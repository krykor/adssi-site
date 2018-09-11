import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Home } from './components/home/home'
import { Offer } from './components/offer/offer'
import { Portfolio } from './components/portfolio/portfolio'
import { Contact } from './components/contact/contact'
import { MainFooter } from './components/footer/main-footer'
import { MainNav } from './components/nav/main-nav'
import { Elements } from './components/portfolio/portfolio-element/element'

import  ourWorksData  from './api/ourWorksData.json'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainNav navClass="affix"/> 
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/oferta" component={Offer} />
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/kontakt" component={Contact} />

              <Route path="/portfolio/:user" component={Elements}/>
            </Switch>
          </div>
          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default App;
