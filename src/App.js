import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/home/home';
import { Offer } from './components/offer/offer'
import { MainFooter } from './components/footer/main-footer'
import { MainNav } from './components/nav/main-nav';




const Portfolio = () => (
  <div>
    Code
  </div>
)

const Kontakt = () => (
  <div>
    Contact
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {Home.match != null ? <MainNav navClass=""/> : <MainNav navClass="affix"/>}
            {/* <MainNav {this.props.match ? navClass="affix" : navClass=""}/> */}
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/oferta" component={Offer} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/kontakt" component={Kontakt} />
          </div>
          
          <MainFooter />
          
        </div>
      </Router>
    );
  }
}

export default App;
