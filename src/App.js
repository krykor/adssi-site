import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './components/home/home'
import { Offer } from './components/offer/offer'
import { Portfolio } from './components/portfolio/portfolio'
import { Contact } from './components/contact/contact'
import { MainFooter } from './components/footer/main-footer'
import { MainNav } from './components/nav/main-nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainNav navClass="affix"/> 
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/oferta" component={Offer} />
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/kontakt" component={Contact} />
          </div>
          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default App;
